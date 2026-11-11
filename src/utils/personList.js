import { BASE_URL, API_KEY } from "/src/api";
import useFetch from "/src/hooks/useFetch";

const uniqueById = (people) =>
  people.filter(
    (person, index, self) =>
      index === self.findIndex((item) => item.id === person.id)
  );

const sortPeople = (people, sort) => {
  if (sort === "name") {
    return [...people].sort((a, b) => a.name.localeCompare(b.name));
  }
  return [...people].sort(
    (a, b) => (b.popularity || 0) - (a.popularity || 0)
  );
};

export const applyPersonFilters = (people, { gender, sort } = {}) => {
  let filtered = [...people];

  if (gender) {
    filtered = filtered.filter((person) => String(person.gender) === gender);
  }

  return sortPeople(filtered, sort || "popularity");
};

const fetchTitlePeople = async ({
  pageParam,
  country,
  medium = "movie",
  role = "cast",
}) => {
  const discoverPath = medium === "tv" ? "discover/tv" : "discover/movie";
  const countryParam = country ? `&with_origin_country=${country}` : "";
  const listUrl = `${BASE_URL}/${discoverPath}?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=${pageParam}&include_adult=false${countryParam}`;
  const listData = await useFetch(listUrl);
  const titles = listData.results.slice(0, 12);
  const peopleMap = new Map();

  await Promise.all(
    titles.map(async (title) => {
      try {
        const creditsPath =
          medium === "tv"
            ? `${BASE_URL}/tv/${title.id}/credits?api_key=${API_KEY}`
            : `${BASE_URL}/movie/${title.id}/credits?api_key=${API_KEY}`;
        const creditsData = await useFetch(creditsPath);

        if (role === "director") {
          creditsData.crew
            .filter((person) => person.job === "Director")
            .forEach((director) => {
              if (!peopleMap.has(director.id)) {
                peopleMap.set(director.id, {
                  ...director,
                  known_for_department: "Directing",
                });
              }
            });
          return;
        }

        creditsData.cast.slice(0, 8).forEach((actor) => {
          if (!peopleMap.has(actor.id)) {
            peopleMap.set(actor.id, {
              ...actor,
              known_for_department: "Acting",
            });
          }
        });
      } catch (err) {
        console.error(`Error fetching credits for title ${title.id}:`, err);
      }
    })
  );

  return {
    results: Array.from(peopleMap.values()),
    total_pages: Math.min(listData.total_pages || 1, 10),
    total_results: peopleMap.size,
    page: pageParam,
  };
};

export const fetchActorsPage = async ({
  pageParam,
  searchQuery,
  country,
}) => {
  if (searchQuery) {
    const url = `${BASE_URL}/search/person?api_key=${API_KEY}&language=en-US&query=${encodeURIComponent(
      searchQuery
    )}&page=${pageParam}&include_adult=false`;
    return useFetch(url);
  }

  if (country) {
    return fetchTitlePeople({
      pageParam,
      country,
      medium: "movie",
      role: "cast",
    });
  }

  const url = `${BASE_URL}/person/popular?api_key=${API_KEY}&language=en-US&page=${pageParam}`;
  return useFetch(url);
};

export const fetchDirectorsPage = async ({
  pageParam,
  searchQuery,
  country,
  medium = "movie",
}) => {
  if (searchQuery) {
    const url = `${BASE_URL}/search/person?api_key=${API_KEY}&language=en-US&query=${encodeURIComponent(
      searchQuery
    )}&page=${pageParam}&include_adult=false`;
    return useFetch(url);
  }

  return fetchTitlePeople({
    pageParam,
    country,
    medium,
    role: "director",
  });
};

export const flattenActors = (pages) =>
  uniqueById(
    pages
      .flatMap((page) => page.results)
      .filter((person) => person.known_for_department === "Acting")
  );

export const flattenDirectors = (pages) =>
  uniqueById(
    pages
      .flatMap((page) => page.results)
      .filter(
        (person) =>
          person.known_for_department === "Directing" ||
          person.job === "Director" ||
          (person.known_for &&
            person.known_for.some(
              (work) =>
                work.media_type === "movie" || work.media_type === "tv"
            ))
      )
  );

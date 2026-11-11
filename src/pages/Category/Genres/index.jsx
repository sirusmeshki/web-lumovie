import S from "./genres.module.scss";
import { useQuery } from "@tanstack/react-query";

import { BASE_URL, API_KEY } from "/src/api";
import useFetch from "/src/hooks/useFetch";

import SectionHeader from "/src/components/Cards/SectionHeader";
import GenreCard from "/src/components/Cards/GenreCard";
import Loading from "/src/pages/Loading";
import ErrorText from "/src/pages/Error/ErrorText";

const Genres = () => {
  const {
    data: movieGenres,
    isLoading: moviesLoading,
    isError: moviesError,
    error: moviesErr,
  } = useQuery({
    queryKey: ["movie-genres"],
    queryFn: () =>
      useFetch(
        `${BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=en-US`
      ),
  });

  const {
    data: tvGenres,
    isLoading: tvLoading,
    isError: tvError,
    error: tvErr,
  } = useQuery({
    queryKey: ["tv-genres"],
    queryFn: () =>
      useFetch(`${BASE_URL}/genre/tv/list?api_key=${API_KEY}&language=en-US`),
  });

  if (moviesLoading || tvLoading) return <Loading />;
  if (moviesError) return <ErrorText message={moviesErr.message} />;
  if (tvError) return <ErrorText message={tvErr.message} />;

  return (
    <div className={S["genres"]}>
      <section className={S["content"]}>
        <div className={S["section"]}>
          <SectionHeader title="movie genres" />
          <div className={S["grid"]}>
            {movieGenres.genres.map((genre) => (
              <GenreCard key={`movie-${genre.id}`} genre={genre} type="movie" />
            ))}
          </div>
        </div>

        <div className={S["section"]}>
          <SectionHeader title="tv genres" />
          <div className={S["grid"]}>
            {tvGenres.genres.map((genre) => (
              <GenreCard key={`tv-${genre.id}`} genre={genre} type="tv" />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Genres;

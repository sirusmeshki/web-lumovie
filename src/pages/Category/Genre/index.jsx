import S from "./genre.module.scss";
import { Fragment, useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

import { BASE_URL, API_KEY } from "/src/api";
import useFetch from "/src/hooks/useFetch";
import useTitle from "/src/hooks/useTitle";

import SectionHeader from "/src/components/Cards/SectionHeader";
import Movie from "/src/components/Cards/MoviesSection/Movie";
import Serie from "/src/components/Cards/MoviesSection/Serie";
import Loading from "/src/pages/Loading";
import Logo from "/src/components/Logo";
import ErrorText from "/src/pages/Error/ErrorText";

const Genre = () => {
  const { genreName } = useParams();
  const [searchParams] = useSearchParams();
  const mediaType = searchParams.get("type") === "tv" ? "tv" : "movie";
  const { ref, inView } = useInView();

  const {
    data: genresData,
    isLoading: genresLoading,
    isError: genresError,
    error: genresErr,
  } = useQuery({
    queryKey: [`${mediaType}-genres`],
    queryFn: () =>
      useFetch(
        `${BASE_URL}/genre/${mediaType}/list?api_key=${API_KEY}&language=en-US`
      ),
  });

  const genre = genresData?.genres?.find(
    (item) => useTitle(item.name) === genreName
  );

  const { data, isLoading, isError, error, fetchNextPage, hasNextPage } =
    useInfiniteQuery({
      queryKey: ["genre-discover", mediaType, genre?.id],
      initialPageParam: 1,
      enabled: Boolean(genre?.id),
      queryFn: ({ pageParam }) =>
        useFetch(
          `${BASE_URL}/discover/${mediaType}?api_key=${API_KEY}&language=en-US&with_genres=${genre.id}&sort_by=popularity.desc&page=${pageParam}&include_adult=false`
        ),
      getNextPageParam: (lastPage, pages) =>
        lastPage.total_pages === pages.length ? undefined : pages.length + 1,
    });

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);

  if (genresLoading || (genre && isLoading && !data)) return <Loading />;
  if (genresError) return <ErrorText message={genresErr.message} />;
  if (isError) return <ErrorText message={error.message} />;

  if (!genre) {
    return (
      <div className={S["genre"]}>
        <section className={S["content"]}>
          <div className={S["empty"]}>
            <p>Genre not found.</p>
          </div>
        </section>
      </div>
    );
  }

  const results = data?.pages?.flatMap((page) => page.results) || [];

  return (
    <div className={S["genre"]}>
      <section className={S["content"]}>
        <SectionHeader title={genre.name} />

        {results.length === 0 ? (
          <div className={S["empty"]}>
            <p>No titles found for this genre.</p>
          </div>
        ) : (
          <>
            <div className={S["grid"]}>
              {data.pages.map((page, index) => (
                <Fragment key={index}>
                  {page.results.map((item) =>
                    mediaType === "tv" ? (
                      <Serie
                        key={item.id}
                        serie={item}
                        className={S["card"]}
                      />
                    ) : (
                      <Movie
                        key={item.id}
                        movie={item}
                        className={S["card"]}
                      />
                    )
                  )}
                </Fragment>
              ))}
            </div>
            {hasNextPage && (
              <div ref={ref} className={S["loading-spinner"]}>
                <Logo spinner noLogoText />
              </div>
            )}
          </>
        )}
      </section>
    </div>
  );
};

export default Genre;

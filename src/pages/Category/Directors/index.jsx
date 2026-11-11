import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useSearchParams, Form } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

import S from "./directors.module.scss";
import DirectorCard from "/src/components/Cards/DirectorCard";
import SectionHeader from "/src/components/Cards/SectionHeader";
import PersonFilters from "/src/components/PersonFilters";
import Loading from "/src/pages/Loading";
import Logo from "/src/components/Logo";
import ErrorText from "/src/pages/Error/ErrorText";
import Button from "/src/components/Button";
import IC_Search from "/src/assets/icon/IC_Search";
import {
  DEFAULT_DIRECTOR_FILTERS,
  DIRECTOR_FILTER_GROUPS,
} from "/src/constants/personFilters";
import {
  applyPersonFilters,
  fetchDirectorsPage,
  flattenDirectors,
} from "/src/utils/personList";

const Directors = () => {
  const { ref, inView } = useInView();
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get("q") || "";
  const medium = searchParams.get("medium") || DEFAULT_DIRECTOR_FILTERS.medium;
  const sort = searchParams.get("sort") || DEFAULT_DIRECTOR_FILTERS.sort;
  const country =
    searchParams.get("country") || DEFAULT_DIRECTOR_FILTERS.country;
  const onTabletOrMobile = useMediaQuery({ query: "(max-width: 61.875rem)" });

  const filterValues = { medium, sort, country };

  const { data, isLoading, isError, error, fetchNextPage, hasNextPage } =
    useInfiniteQuery({
      queryKey: ["directors", searchQuery, country, medium],
      initialPageParam: 1,
      queryFn: ({ pageParam }) =>
        fetchDirectorsPage({ pageParam, searchQuery, country, medium }),
      getNextPageParam: (lastPage, pages) =>
        lastPage.total_pages === pages.length ? undefined : pages.length + 1,
    });

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);

  const handleFilterChange = (key, value) => {
    const next = new URLSearchParams(searchParams);
    if (!value || value === DEFAULT_DIRECTOR_FILTERS[key]) {
      next.delete(key);
    } else {
      next.set(key, value);
    }
    setSearchParams(next, { replace: true });
  };

  if (isLoading && !data) return <Loading />;
  if (isError) return <ErrorText message={error.message} />;

  const directors = applyPersonFilters(flattenDirectors(data?.pages || []), {
    sort,
  });

  return (
    <div className={S["directors"]}>
      <section
        className={`${onTabletOrMobile ? S["content--mobile"] : ""} ${
          S["content"]
        }`}>
        <SectionHeader title="directors" />

        <div className={S["toolbar"]}>
          <Form className={S["search-form"]} method="get">
            {country && <input type="hidden" name="country" value={country} />}
            {medium !== "movie" && (
              <input type="hidden" name="medium" value={medium} />
            )}
            {sort !== "popularity" && (
              <input type="hidden" name="sort" value={sort} />
            )}
            <input
              type="search"
              name="q"
              placeholder="Search for directors"
              className={S["search-input"]}
              defaultValue={searchQuery}
            />
            <Button.Icon
              icon={<IC_Search />}
              dimension={2.75}
              type="submit"
              alt="Search Icon"
            />
          </Form>

          <PersonFilters
            groups={DIRECTOR_FILTER_GROUPS}
            values={filterValues}
            onChange={handleFilterChange}
          />
        </div>

        {directors.length === 0 ? (
          <div className={S["no-results"]}>
            <p>No directors found. Try a different search or filter.</p>
          </div>
        ) : (
          <>
            <div className={S["directors-grid"]}>
              {directors.map((director) => (
                <DirectorCard key={director.id} director={director} />
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

export default Directors;

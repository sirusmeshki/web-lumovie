import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useSearchParams, Form } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

import S from "./actors.module.scss";
import ActorCard from "/src/components/Cards/ActorCard";
import SectionHeader from "/src/components/Cards/SectionHeader";
import PersonFilters from "/src/components/PersonFilters";
import Loading from "/src/pages/Loading";
import Logo from "/src/components/Logo";
import ErrorText from "/src/pages/Error/ErrorText";
import Button from "/src/components/Button";
import IC_Search from "/src/assets/icon/IC_Search";
import {
  ACTOR_FILTER_GROUPS,
  DEFAULT_ACTOR_FILTERS,
} from "/src/constants/personFilters";
import {
  applyPersonFilters,
  fetchActorsPage,
  flattenActors,
} from "/src/utils/personList";

const Actors = () => {
  const { ref, inView } = useInView();
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get("q") || "";
  const gender = searchParams.get("gender") || DEFAULT_ACTOR_FILTERS.gender;
  const sort = searchParams.get("sort") || DEFAULT_ACTOR_FILTERS.sort;
  const country = searchParams.get("country") || DEFAULT_ACTOR_FILTERS.country;
  const onTabletOrMobile = useMediaQuery({ query: "(max-width: 61.875rem)" });

  const filterValues = { gender, sort, country };

  const { data, isLoading, isError, error, fetchNextPage, hasNextPage } =
    useInfiniteQuery({
      queryKey: ["actors", searchQuery, country],
      initialPageParam: 1,
      queryFn: ({ pageParam }) =>
        fetchActorsPage({ pageParam, searchQuery, country }),
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
    if (!value || value === DEFAULT_ACTOR_FILTERS[key]) {
      next.delete(key);
    } else {
      next.set(key, value);
    }
    setSearchParams(next, { replace: true });
  };

  if (isLoading && !data) return <Loading />;
  if (isError) return <ErrorText message={error.message} />;

  const actors = applyPersonFilters(flattenActors(data?.pages || []), {
    gender,
    sort,
  });

  return (
    <div className={S["actors"]}>
      <section
        className={`${onTabletOrMobile ? S["content--mobile"] : ""} ${
          S["content"]
        }`}>
        <SectionHeader title="actors" />

        <div className={S["toolbar"]}>
          <Form className={S["search-form"]} method="get">
            {gender && <input type="hidden" name="gender" value={gender} />}
            {country && <input type="hidden" name="country" value={country} />}
            {sort !== "popularity" && (
              <input type="hidden" name="sort" value={sort} />
            )}
            <input
              type="search"
              name="q"
              placeholder="Search for actors"
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
            groups={ACTOR_FILTER_GROUPS}
            values={filterValues}
            onChange={handleFilterChange}
          />
        </div>

        {actors.length === 0 ? (
          <div className={S["no-results"]}>
            <p>No actors found. Try a different search or filter.</p>
          </div>
        ) : (
          <>
            <div className={S["actors-grid"]}>
              {actors.map((actor) => (
                <ActorCard key={actor.id} actor={actor} />
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

export default Actors;

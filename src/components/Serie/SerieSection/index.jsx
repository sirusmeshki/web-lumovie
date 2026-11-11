import { useQuery } from "@tanstack/react-query";
import { BASE_URL, API_KEY } from "/src/api";

import useFetch from "/src/hooks/useFetch";

import ErrorText from "/src/pages/Error/ErrorText";
import OnLoading from "/src/components/Cards/MoviesSection/OnLoading";
import SeriesSection from "/src/components/Cards/SeriesSection";

const SerieSection = ({
  CATEGORY_NAME,
  PAGE,
  title,
  href,
  loadingHasHeader,
  hasBorder,
  hasSeeMore,
  hasHalfWidth,
}) => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: [title],
    queryFn: () =>
      useFetch(
        `${BASE_URL}/tv/${CATEGORY_NAME}?api_key=${API_KEY}&language=en-US&page=${PAGE}`
      ),
  });

  if (isError) return <ErrorText message={error.message} />;

  return (
    <>
      {isLoading ? (
        <OnLoading hasHeader={loadingHasHeader} />
      ) : (
        <SeriesSection
          seriesData={data.results}
          title={title}
          hasBorder={hasBorder}
          hasSeeMore={hasSeeMore}
          hasHalfWidth={hasHalfWidth}
          href={href ? `/${href}` : `/${title}`}
        />
      )}
    </>
  );
};

export default SerieSection;

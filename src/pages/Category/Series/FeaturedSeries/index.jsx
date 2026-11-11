import { useQuery } from "@tanstack/react-query";
import { BASE_URL, API_KEY } from "/src/api";

import useFetch from "/src/hooks/useFetch";

import ErrorText from "/src/pages/Error/ErrorText";
import OnLoading from "/src/components/Posters/OnLoading";
import SeriePosters from "/src/components/Posters/SeriePosters";

const FeaturedSeries = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["series-featured"],
    queryFn: () =>
      useFetch(
        `${BASE_URL}/tv/popular?api_key=${API_KEY}&language=en-US&page=1`
      ),
  });

  if (isLoading) return <OnLoading />;
  if (isError) return <ErrorText message={error.message} />;

  return <SeriePosters data={data.results} />;
};

export default FeaturedSeries;

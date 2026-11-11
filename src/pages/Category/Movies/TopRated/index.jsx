import MovieSection from "/src/components/Movie/MovieSection";

const TopRated = () => {
  return (
    <MovieSection
      CATEGORY_NAME="top_rated"
      PAGE="1"
      title="top rated"
      href="movies"
      loadingHasHeader
      hasSeeMore
    />
  );
};

export default TopRated;

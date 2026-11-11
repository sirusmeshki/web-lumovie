import MovieSection from "/src/components/Movie/MovieSection";

const Popular = () => {
  return (
    <MovieSection
      CATEGORY_NAME="popular"
      PAGE="2"
      title="popular"
      href="movies"
      loadingHasHeader
      hasBorder
      hasSeeMore
      hasHalfWidth
    />
  );
};

export default Popular;

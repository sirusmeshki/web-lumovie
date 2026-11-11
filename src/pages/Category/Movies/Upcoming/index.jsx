import MovieSection from "/src/components/Movie/MovieSection";

const Upcoming = () => {
  return (
    <MovieSection
      CATEGORY_NAME="upcoming"
      PAGE="1"
      title="upcoming"
      href="upcomings"
      loadingHasHeader
      hasBorder
      hasSeeMore
      hasHalfWidth
    />
  );
};

export default Upcoming;

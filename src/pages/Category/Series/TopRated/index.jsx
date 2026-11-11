import SerieSection from "/src/components/Serie/SerieSection";

const TopRated = () => {
  return (
    <SerieSection
      CATEGORY_NAME="top_rated"
      PAGE="1"
      title="top rated"
      href="series"
      loadingHasHeader
      hasBorder
      hasSeeMore
      hasHalfWidth
    />
  );
};

export default TopRated;

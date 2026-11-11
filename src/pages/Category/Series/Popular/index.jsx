import SerieSection from "/src/components/Serie/SerieSection";

const Popular = () => {
  return (
    <SerieSection
      CATEGORY_NAME="popular"
      PAGE="2"
      title="popular"
      href="series"
      loadingHasHeader
      hasBorder
      hasSeeMore
      hasHalfWidth
    />
  );
};

export default Popular;

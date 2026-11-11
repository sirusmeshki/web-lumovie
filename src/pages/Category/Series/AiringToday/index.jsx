import SerieSection from "/src/components/Serie/SerieSection";

const AiringToday = () => {
  return (
    <SerieSection
      CATEGORY_NAME="airing_today"
      PAGE="1"
      title="airing today"
      href="series"
      loadingHasHeader
      hasSeeMore
    />
  );
};

export default AiringToday;

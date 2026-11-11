import SerieSection from "/src/components/Serie/SerieSection";

const OnTheAir = () => {
  return (
    <SerieSection
      CATEGORY_NAME="on_the_air"
      PAGE="1"
      title="on the air"
      href="series"
      loadingHasHeader
      hasSeeMore
    />
  );
};

export default OnTheAir;

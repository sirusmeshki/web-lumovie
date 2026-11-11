import MovieSection from "/src/components/Movie/MovieSection";

const NowPlaying = () => {
  return (
    <MovieSection
      CATEGORY_NAME="now_playing"
      PAGE="1"
      title="now playing"
      href="movies"
      loadingHasHeader
      hasSeeMore
    />
  );
};

export default NowPlaying;

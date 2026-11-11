import S from "./movies.module.scss";

import FeaturedMovies from "./FeaturedMovies";
import NowPlaying from "./NowPlaying";
import Popular from "./Popular";
import TopRated from "./TopRated";
import Upcoming from "./Upcoming";

const Movies = () => {
  return (
    <div className={S["movies"]}>
      <section className={S["content"]}>
        <FeaturedMovies />
        <NowPlaying />
        <TopRated />

        <div className={S["lists"]}>
          <Upcoming />
          <Popular />
        </div>
      </section>
    </div>
  );
};

export default Movies;

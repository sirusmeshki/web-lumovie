import S from "./home.module.scss";
import MediaQuery from "react-responsive";

import FeaturedMovies from "./FeaturedMovies";
import NewRelease from "./NewRelease";
import Popular from "./Popular";

import Upcomings from "/src/components/Cards/Upcomings";
import SerieSideBar from "/src/layout/SideBars/SerieSideBar";
import Bookmark from "/src/components/Cards/Bookmark";
import Cinema from "/src/components/Cards/Cinema";

const Home = () => {
  return (
    <div className={S["home"]}>
      <section className={S["content"]}>
        <FeaturedMovies />
        <NewRelease />

        <div className={S["lists"]}>
          <Upcomings />
          <Popular />
        </div>

        {/* quick access cards, main feature in progress */}
        <div className={S["quick-access"]}>
          <Bookmark isPlaceholder />
          <Cinema isPlaceholder />
        </div>
      </section>

      <MediaQuery minWidth="40rem">
        <SerieSideBar />
      </MediaQuery>
    </div>
  );
};

export default Home;

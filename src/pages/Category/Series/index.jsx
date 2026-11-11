import S from "./series.module.scss";

import FeaturedSeries from "./FeaturedSeries";
import AiringToday from "./AiringToday";
import OnTheAir from "./OnTheAir";
import Popular from "./Popular";
import TopRated from "./TopRated";

const Series = () => {
  return (
    <div className={S["series"]}>
      <section className={S["content"]}>
        <FeaturedSeries />
        <AiringToday />
        <OnTheAir />

        <div className={S["lists"]}>
          <TopRated />
          <Popular />
        </div>
      </section>
    </div>
  );
};

export default Series;

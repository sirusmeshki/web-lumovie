import S from "/src/components/Cards/MoviesSection/Movies/movies.module.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";

import Serie from "/src/components/Cards/MoviesSection/Serie";

const Series = ({ data, swiperRef, isCompact }) => {
  return (
    <section className={S["movies-list"]}>
      <Swiper
        modules={[Navigation]}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        grabCursor={true}
        slidesPerView="auto"
        spaceBetween={10}>
        {data.map((serie) => {
          return (
            <SwiperSlide key={serie.id}>
              <Serie serie={serie} isCompact={isCompact} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Series;

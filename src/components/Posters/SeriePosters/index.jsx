import S from "../posters.module.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import SeriePoster from "../SeriePoster";

const SeriePosters = ({ data }) => {
  return (
    <section className={S["posters"]}>
      <Swiper
        grabCursor={true}
        spaceBetween={10}
        slidesPerView="auto"
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}>
        {data.map((poster) => {
          return (
            <SwiperSlide key={poster.id}>
              <SeriePoster id={poster.id} path={poster.name} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default SeriePosters;

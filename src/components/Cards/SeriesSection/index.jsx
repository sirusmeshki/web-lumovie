import S from "/src/components/Cards/MoviesSection/movie-section.module.scss";

import { useRef } from "react";

import Container from "/src/components/HOC/Container";
import Wrapper from "/src/components/HOC/Wrapper";

import SectionHeader from "/src/components/Cards/SectionHeader";
import Series from "./Series";

const SeriesSection = ({
  seriesData,
  title,
  href,
  compactCard,
  hasMaxWidth,
  hasBorder,
  hasSeeMore,
  hasHalfWidth,
}) => {
  const swiperRef = useRef(null);

  return (
    <Container
      className={`${S["container"]} ${hasHalfWidth ? S["half-width"] : ""} `}
      style={{ maxWidth: hasMaxWidth && "75rem" }}>
      <Wrapper
        className={`${S["wrapper"]} ${
          hasBorder ? S["wrapper-border"] : S["wrapper-normal"]
        } `}>
        <SectionHeader
          title={title}
          arrows
          swiperRef={swiperRef}
          href={href}
          seemore={hasSeeMore}
        />
        <Series
          data={seriesData}
          swiperRef={swiperRef}
          isCompact={compactCard}
        />
      </Wrapper>
    </Container>
  );
};

export default SeriesSection;

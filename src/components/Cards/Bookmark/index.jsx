import S from "./bookmark.module.scss";

import { useRef } from "react";

import Wrapper from "../../HOC/Wrapper";
import Button from "../../Button";
import SectionHeader from "../SectionHeader";

import IC_Bookmark from "/src/assets/icon/IC_Bookmark";
import IC_BookmarkPH from "/src/assets/icon/IC_BookmarkPH";
import { Link } from "react-router-dom";

const Bookmark = ({ isPlaceholder }) => {
  const swiperRef = useRef();

  return (
    <Wrapper
      className={`
      ${S["bookmark"]}
      ${
        isPlaceholder
          ? S["bookmark--placeholder"]
          : S["bookmark--include-content"]
      }
    `}
    >
      {isPlaceholder ? (
        <SectionHeader title="Bookmarks" />
      ) : (
        <SectionHeader
          title="Bookmarks"
          arrows
          seemore="See More"
          swiperRef={swiperRef}
        />
      )}
      {isPlaceholder ? (
        <div className={S["content"]}>
          <h5 className={S["title"]}>
            Click on {<IC_Bookmark className={S["icon"]} />} icon to add movies
            to your bookmark list
          </h5>
          <Link to="/bookmarks">
            <Button.CTA text="Bookmark List" href="./bookmarks" />
          </Link>
          <h5 className={S["title"]}>Search for Movie to Add</h5>
        </div>
      ) : (
        <div className={S["movies"]}>
          {/* <Movies data={} swiperRef={swiperRef} /> */}
        </div>
      )}
      <IC_BookmarkPH className={S["icon-placeholder"]} />
    </Wrapper>
  );
};

export default Bookmark;

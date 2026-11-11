import S from "./movie.module.scss";
import { Link } from "react-router-dom";
import Button from "/src/components/Button";

import { POSTER_URL_IMAGE } from "/src/api";

import PosterPlaceholder from "/src/assets/icon/poster_placeholder.png";
import IC_Bookmark from "/src/assets/icon/IC_Bookmark";

import useTitle from "/src/hooks/useTitle";
import useMovie from "/src/hooks/useMovie";

import Title from "/src/components/Movie/Detail/Title";
import Genres from "/src/components/Movie/Detail/Genres";
import ReleaseDate from "/src/components/Movie/Detail/ReleaseDate";
import Certification from "/src/components/Movie/Detail/Certification";
import Runtime from "/src/components/Movie/Detail/Runtime";
import UserScore from "/src/components/Movie/Detail/UserScore";
import OnLoading from "./onLoading";

const Movie = ({ movie, isCompact, className }) => {
  const query = useMovie(movie.id);
  if (query.isLoading) return <OnLoading />;

  const [detail, _, certifications] = query.data;

  return (
    <div
      className={`${S["movie"]} ${
        isCompact ? S["movie--compact"] : S["movie--normal"]
      } ${className ? className : ""}`}>
      <div className={S["image"]}>
        <Link to={`/movie/${movie.id}-${useTitle(movie.title)}`}>
          {detail.poster_path ? (
            <img
              src={`${POSTER_URL_IMAGE}/${detail.poster_path}`}
              alt={`${detail.title} poster`}
            />
          ) : (
            <img src={PosterPlaceholder} />
          )}
        </Link>
        <Button.Icon
          className={S["bookmark"]}
          icon={<IC_Bookmark />}
          dimension={2.5}
          border
        />
      </div>
      <div className={S["info"]}>
        <Title category="movie" title={movie.title} movieId={movie.id} isCard />
        <div className={S["details"]}>
          <Genres genres={detail.genres} isCard />
          <Runtime minute={detail.runtime} />
          <ReleaseDate date={detail.release_date} />
          <Certification certifications={certifications} />
          <UserScore score={detail.vote_average} />
        </div>
      </div>
    </div>
  );
};

export default Movie;

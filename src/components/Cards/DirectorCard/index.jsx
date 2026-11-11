import S from "./director-card.module.scss";
import { Link } from "react-router-dom";
import useTitle from "/src/hooks/useTitle";
import PosterPlaceholder from "/src/assets/icon/poster_placeholder.png";

const DirectorCard = ({ director }) => {
  return (
    <Link
      to={`/director/${useTitle(director.name)}`}
      className={S["director-card"]}
    >
      <div className={S["image-wrapper"]}>
        {director.profile_path ? (
          <img
            className={S["image"]}
            src={`https://image.tmdb.org/t/p/w342/${director.profile_path}`}
            alt={director.name}
          />
        ) : (
          <img
            className={S["image"]}
            src={PosterPlaceholder}
            alt={director.name}
          />
        )}
      </div>
      <h5 className={S["name"]}>{director.name}</h5>
    </Link>
  );
};

export default DirectorCard;



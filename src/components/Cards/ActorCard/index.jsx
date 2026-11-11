import S from "./actor-card.module.scss";
import { Link } from "react-router-dom";
import useTitle from "/src/hooks/useTitle";
import PosterPlaceholder from "/src/assets/icon/poster_placeholder.png";

const ActorCard = ({ actor }) => {
  return (
    <Link
      to={`/actor/${useTitle(actor.name)}`}
      className={S["actor-card"]}
    >
      <div className={S["image-wrapper"]}>
        {actor.profile_path ? (
          <img
            className={S["image"]}
            src={`https://image.tmdb.org/t/p/w342/${actor.profile_path}`}
            alt={actor.name}
          />
        ) : (
          <img
            className={S["image"]}
            src={PosterPlaceholder}
            alt={actor.name}
          />
        )}
      </div>
      <h5 className={S["name"]}>{actor.name}</h5>
    </Link>
  );
};

export default ActorCard;


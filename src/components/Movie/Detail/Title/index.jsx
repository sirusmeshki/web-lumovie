import { Link } from "react-router-dom";
import S from "../detail.module.scss";
import useTitle from "/src/hooks/useTitle";

export default function Title({ title, movieId, isCard }) {
  return (
    <>
      {isCard ? (
        <Link
          to={`/movie/${movieId}-${useTitle(title)}`}
          className={`${S["title-card"]} ${S["title"]}`}
        >
          {title}
        </Link>
      ) : (
        <h2 className={`${S["title-page"]} ${S["title"]}`}>{title}</h2>
      )}
    </>
  );
}
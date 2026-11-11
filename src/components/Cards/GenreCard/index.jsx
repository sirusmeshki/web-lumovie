import S from "./genre-card.module.scss";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import { BASE_URL, API_KEY, BACKDROP_URL_IMAGE } from "/src/api";
import useFetch from "/src/hooks/useFetch";
import useTitle from "/src/hooks/useTitle";

const GenreCard = ({ genre, type = "movie" }) => {
  const mediaType = type === "tv" ? "tv" : "movie";

  const { data } = useQuery({
    queryKey: ["genre-sample", mediaType, genre.id],
    queryFn: () =>
      useFetch(
        `${BASE_URL}/discover/${mediaType}?api_key=${API_KEY}&language=en-US&with_genres=${genre.id}&sort_by=popularity.desc&page=1&include_adult=false`
      ),
  });

  const sample = data?.results?.find(
    (item) => item.backdrop_path || item.poster_path
  );
  const imagePath = sample?.backdrop_path || sample?.poster_path;

  return (
    <Link
      to={`/genre/${useTitle(genre.name)}?type=${mediaType}`}
      className={S["genre-card"]}>
      {imagePath && (
        <img
          className={S["poster"]}
          src={`${BACKDROP_URL_IMAGE}/${imagePath}`}
          alt=""
          loading="lazy"
        />
      )}
      <span className={S["overlay"]} />
      <h5 className={S["name"]}>{genre.name}</h5>
    </Link>
  );
};

export default GenreCard;

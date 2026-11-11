import S from "../../../MoviePage/Models/models.module.scss";
import DetailS from "/src/components/Movie/Detail/detail.module.scss";

import Title from "/src/components/Movie/Detail/Title";
import Plot from "/src/components/Movie/Detail/Plot";
import UserScore from "/src/components/Movie/Detail/UserScore";
import MoviesSection from "/src/components/Cards/MoviesSection";
import useTitle from "/src/hooks/useTitle";
import { Link } from "react-router-dom";
import PosterPlaceholder from "/src/assets/icon/poster_placeholder.png";

const ActorDetails = ({ actor, movieCredits, tvCredits }) => {
  // Get known for movies (top rated movies)
  const knownForMovies =
    movieCredits?.cast
      ?.sort((a, b) => (b.vote_average || 0) - (a.vote_average || 0))
      .slice(0, 20) || [];

  // Get known for TV shows
  const knownForTV =
    tvCredits?.cast
      ?.sort((a, b) => (b.vote_average || 0) - (a.vote_average || 0))
      .slice(0, 20) || [];

  // Format birthday
  const formatDate = (dateString) => {
    if (!dateString) return null;
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // Calculate age
  const calculateAge = (birthday, deathday) => {
    if (!birthday) return null;
    const birth = new Date(birthday);
    const end = deathday ? new Date(deathday) : new Date();
    let age = end.getFullYear() - birth.getFullYear();
    const monthDiff = end.getMonth() - birth.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && end.getDate() < birth.getDate())) {
      age--;
    }
    return age;
  };

  const age = calculateAge(actor.birthday, actor.deathday);
  const birthday = formatDate(actor.birthday);
  const deathday = formatDate(actor.deathday);

  return (
    <section className={S["details"]}>
      <section className={S["title"]}>
        <div className={S["info"]}>
          <div className={S["head"]}>
            <Title title={actor.name} />
          </div>
          <div className={S["facts"]}>
            {birthday && (
              <div className={DetailS["fact"]}>
                {birthday}
                {age !== null && ` (${age} years old)`}
              </div>
            )}
            {actor.place_of_birth && (
              <div className={DetailS["fact"]}>{actor.place_of_birth}</div>
            )}
            {deathday && (
              <div className={DetailS["fact"]}>Died: {deathday}</div>
            )}
          </div>
        </div>
      </section>

      {actor.biography && (
        <section>
          <h3
            className={DetailS["section-title"]}
            style={{ marginBottom: "1rem" }}
          >
            Biography
          </h3>
          <Plot plot={actor.biography} />
        </section>
      )}

      {knownForMovies.length > 0 && (
        <MoviesSection
          moviesData={knownForMovies}
          title="Known For (Movies)"
          compactCard={false}
          hasSeeMore={false}
        />
      )}

      {knownForTV.length > 0 && (
        <section className={DetailS["section"]} style={{ marginTop: "2rem" }}>
          <h3
            className={DetailS["section-header"]}
            style={{ marginBottom: "1rem" }}
          >
            <span className={DetailS["title"]}>Known For (TV Shows)</span>
          </h3>
          <div
            className={DetailS["section-links"]}
            style={{ maxHeight: "100%" }}
          >
            {knownForTV.slice(0, 12).map((show) => (
              <Link
                key={show.id}
                to={`/serie/${show.id}-${useTitle(show.name)}`}
                className={DetailS["person"]}
                style={{ textDecoration: "none" }}
              >
                {show.poster_path ? (
                  <img
                    className={DetailS["image"]}
                    src={`https://image.tmdb.org/t/p/h632/${show.poster_path}`}
                    alt={show.name}
                  />
                ) : (
                  <img
                    className={DetailS["image"]}
                    src={PosterPlaceholder}
                    alt={show.name}
                  />
                )}
                <div className={DetailS["info"]}>
                  <h5 className={DetailS["name"]}>{show.name}</h5>
                  {show.character && (
                    <h6 className={DetailS["character"]}>
                      as {show.character}
                    </h6>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </section>
  );
};

export default ActorDetails;

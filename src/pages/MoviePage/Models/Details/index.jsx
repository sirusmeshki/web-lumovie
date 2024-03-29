import S from "../models.module.scss";
import Trailer from "../Trailer";

import Title from "/src/components/Movie/Detail/Title";
import ReleaseDate from "/src/components/Movie/Detail/ReleaseDate";
import Certification from "/src/components/Movie/Detail/Certification";
import Runtime from "/src/components/Movie/Detail/Runtime";
import Genres from "/src/components/Movie/Detail/Genres";
import UserScore from "/src/components/Movie/Detail/UserScore";
import Countries from "/src/components/Movie/Detail/Countries";
import Cast from "/src/components/Movie/Detail/Cast";
import Directors from "/src/components/Movie/Detail/Directors";
import Writers from "/src/components/Movie/Detail/Writers";
import Musician from "/src/components/Movie/Detail/Musician";
import Plot from "/src/components/Movie/Detail/Plot";

const Details = ({ movie, credits, certification }) => {
  return (
    <section className={S["details"]}>
      <section className={S["title"]}>
        <div className={S["info"]}>
          <div className={S["head"]}>
            <Title title={movie.title} />
            <Trailer movieId={movie.id} />
          </div>
          <div className={S["facts"]}>
            <ReleaseDate date={movie.release_date} />
            <Certification certifications={certification} />
            <Runtime minute={movie.runtime} />
          </div>
        </div>
      </section>
      <Genres genres={movie.genres} />
      <section className={S["additional-info"]}>
        <UserScore score={movie.vote_average} />
        <Countries countries={movie.production_countries} />
      </section>
      <Plot plot={movie.overview} />
      <Cast cast={credits.cast} />
      <Directors crew={credits.crew} />
      <Writers crew={credits.crew} />
      <Musician crew={credits.crew} />
    </section>
  );
};

export default Details;

import { useState } from "react";
import S from "../MoviePage/movie-page.module.scss";

import ActorBackground from "./Models/Background";
import ActorDetails from "./Models/Details";

const ActorPage = ({ actor, images, movieCredits, tvCredits }) => {
  return (
    <section className={S["content"]}>
      <div className={S["movie"]}>
        <ActorBackground
          profilePath={actor.profile_path}
          images={images}
          name={actor.name}
        />
        <ActorDetails
          actor={actor}
          movieCredits={movieCredits}
          tvCredits={tvCredits}
        />
      </div>
    </section>
  );
};

export default ActorPage;


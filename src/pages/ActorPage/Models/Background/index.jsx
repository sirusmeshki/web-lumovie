import S from "../../../MoviePage/Models/models.module.scss";

import { BACKGROUND_URL_IMAGE_XL, POSTER_URL_IMAGE } from "/src/api";
import PosterPlaceholder from "/src/assets/icon/poster_placeholder.png";

export default function ActorBackground({ profilePath, images, name }) {
  // Use profile image from images if available, otherwise use profile_path
  const profileImage =
    images && images.profiles && images.profiles.length > 0
      ? images.profiles[0]
      : null;

  return (
    <>
      {profilePath || profileImage ? (
        <div className={S["background-image"]}>
          <div className={S["overlay"]}></div>
          <img
            src={
              profileImage
                ? `${BACKGROUND_URL_IMAGE_XL}/${profileImage.file_path}`
                : `${POSTER_URL_IMAGE}/${profilePath}`
            }
            alt={`${name} profile`}
          />
        </div>
      ) : (
        <div className={S["background-poster"]}>
          <img
            className={S["poster"]}
            src={PosterPlaceholder}
            alt={`${name} profile`}
          />
        </div>
      )}
    </>
  );
}

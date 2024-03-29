import TMDb from "/src/assets/icon/tmdb.svg";
import S from "../detail.module.scss";

const UserScore = ({ score }) => {
  const votePercentage = score.toString().split(".").join("").slice(0, 2);

  return (
    <div className={S["user-score"]}>
      <img className={S["logo"]} src={TMDb} />
      <span className={S["score"]}>{votePercentage}%</span>
    </div>
  );
};

export default UserScore;

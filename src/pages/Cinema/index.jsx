import useSession from "../../hooks/useSession";
import useToken from "../../hooks/useToken";
// import useAccessToken from "../../hooks/useAccessToken";
import Title from "/src/components/Title";

const Cinema = () => {
  const token = useToken();
  // const accessToken = useAccessToken(token);

  return (
    <>
      <Title title="Cinema" />;
    </>
  );
};

export default Cinema;

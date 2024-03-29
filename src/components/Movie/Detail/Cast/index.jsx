import Section from "../../Section";

const Cast = ({ cast }) => {
  const stars = cast.slice(0, 6);
  return <Section title="Stars" links={stars} category="actor" />;
};

export default Cast;

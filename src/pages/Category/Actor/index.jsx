import axios from "axios";
import { useLoaderData } from "react-router-dom";

import { BASE_URL, API_KEY } from "/src/api";

import ActorPage from "/src/pages/ActorPage";
import useActor from "/src/hooks/useActor";
import Loading from "/src/pages/Loading";

export async function loader({ params }) {
  // Convert slug back to name for search
  const actorName = params.actorName
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  const searchActor = async (name) => {
    try {
      const response = await axios.get(
        `${BASE_URL}/search/person?api_key=${API_KEY}&query=${encodeURIComponent(
          name
        )}&page=1`
      );

      // Try to find exact match first, then fall back to first result
      if (response.data.results && response.data.results.length > 0) {
        // Look for exact name match (case insensitive)
        const exactMatch = response.data.results.find(
          (person) => person.name.toLowerCase() === name.toLowerCase()
        );

        if (exactMatch) {
          return exactMatch;
        }

        // Return the first result (most popular/relevant)
        return response.data.results[0];
      }
      return null;
    } catch (error) {
      console.error("Error searching for actor:", error);
      return null;
    }
  };

  const actor = await searchActor(actorName);
  return actor;
}

const Actor = () => {
  const actor = useLoaderData();

  if (!actor) {
    return (
      <div style={{ padding: "2rem", textAlign: "center" }}>
        <h2>Actor not found</h2>
        <p>We couldn't find the actor you're looking for.</p>
      </div>
    );
  }

  const { data, isLoading } = useActor(actor.id);
  if (isLoading) return <Loading />;

  if (!data) {
    return (
      <div style={{ padding: "2rem", textAlign: "center" }}>
        <h2>Error loading actor data</h2>
      </div>
    );
  }

  const [detail, images, movieCredits, tvCredits] = data;
  return (
    <ActorPage
      actor={detail}
      images={images}
      movieCredits={movieCredits}
      tvCredits={tvCredits}
    />
  );
};

export default Actor;

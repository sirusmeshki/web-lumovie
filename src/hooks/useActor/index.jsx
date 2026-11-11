import axios from "axios";
import { useQuery } from "@tanstack/react-query";

import { API_KEY, BASE_URL } from "/src/api";

const getActor = async (actorId) => {
  const { data: detail } = await axios.get(
    `${BASE_URL}/person/${actorId}?api_key=${API_KEY}`
  );
  const { data: images } = await axios.get(
    `${BASE_URL}/person/${actorId}/images?api_key=${API_KEY}`
  );
  const { data: movieCredits } = await axios.get(
    `${BASE_URL}/person/${actorId}/movie_credits?api_key=${API_KEY}`
  );
  const { data: tvCredits } = await axios.get(
    `${BASE_URL}/person/${actorId}/tv_credits?api_key=${API_KEY}`
  );

  return [detail, images, movieCredits, tvCredits];
};

export default function useActor(actorId) {
  return useQuery({
    queryKey: ["actor", actorId],
    queryFn: () => getActor(actorId),
    enabled: !!actorId,
  });
}

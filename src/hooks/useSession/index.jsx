import axios from "axios";
import { useQuery } from "@tanstack/react-query";

import { API_KEY, BASE_URL } from "/src/api";

const getSession = async () => {
  const { data: similar } = await axios.get(
    `${BASE_URL}/authentication/guest_session/new?api_key=${API_KEY}`
  );

  return similar;
};

export default function useSession() {
  return useQuery({
    queryKey: ["session"],
    queryFn: () => getSession(),
  });
}

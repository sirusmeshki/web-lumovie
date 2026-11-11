import axios from "axios";
import { useQuery } from "@tanstack/react-query";

import { ACCESS_TOKEN } from "/src/api";

const options = {
  method: "POST",
  url: "https://api.themoviedb.org/4/auth/request_token",
  headers: {
    accept: "application/json",
    "content-type": "application/json",
    Authorization: `Bearer ${ACCESS_TOKEN}`,
  },
};

export default function useToken() {
  return useQuery({
    queryKey: ["token"],
    queryFn: async () =>
      await axios
        .request(options)
        .then((res) => res.data)
        .catch((error) => console.error(error)),
  });
}

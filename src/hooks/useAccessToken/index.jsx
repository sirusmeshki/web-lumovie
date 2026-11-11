// import axios from "axios";

// const options = {
//   method: "POST",
//   url: `https://www.themoviedb.org/auth/access?request_token=${request_token}`,
//   headers: {
//     accept: "application/json",
//     "content-type": "application/json",
//     Authorization:
//       "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYjEwMTc2YTE2YzM2YjQ0NGM3YzczMjIxZTk5ZDBjNSIsInN1YiI6IjY0NDBlMjQzY2VlMmY2MDQ0YjM1MzM3NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sJLl1m2pLTdQ-UX_GA6VPMXv94rFOAosAULEG6fZAzI",
//   },
// };

// const getAccessToken = async (token) => {
//   axios
//     .request(options)
//     .then(function (response) {
//       console.log(response.data);
//     })
//     .catch(function (error) {
//       console.error(error);
//     });
// };

// export default function useAccessToken(token) {
//   return useQuery({
//     queryKey: ["access"],
//     queryFn: () => getAccessToken(token),
//   });
// }

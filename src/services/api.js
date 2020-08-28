import axios from "axios";

export const key = "468881e0ac550a7015e6d069d87122c9";
export const API = axios.create({
  baseURL: `https://api.themoviedb.org/3/`
});
// https://api.themoviedb.org/3/movie/550?api_key=468881e0ac550a7015e6d069d87122c9
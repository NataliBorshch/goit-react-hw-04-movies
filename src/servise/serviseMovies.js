import axios from "axios";

const key = "api_key=42c4fa9c05708253e8c2f9a05f447e85";
const baseUrl = "https://api.themoviedb.org";

const getPopularMovies = () => {
  const point = `/3/trending/movie/week?`;
  const url = `${baseUrl}${point}${key}`;
  return axios.get(url).then((respones) => respones.data);
};

const foundMovies = (query) => {
  const point = `/3/search/movie?`;
  const url = `${baseUrl}${point}${key}&language=en-US&query=${query}&page=1&include_adult=false`;
  return axios.get(url).then((response) => response.data);
};

const detailMovies = (id) => {
  const poin = `/3/movie/${id}?`;
  const url = `${baseUrl}${poin}${key}&language=en-US`;
  return axios.get(url).then((response) => response.data);
};

const getMoviesActors = (id) => {
  const point = `/3/movie/${id}/credits?`;
  const url = `${baseUrl}${point}${key}&language=en-US`;
  return axios.get(url).then((response) => response.data);
};

const getReviewMovies = (id) => {
  const point = `/3/movie/${id}/reviews?`;
  const url = `${baseUrl}${point}${key}&language=en-US&page=1`;
  return axios.get(url).then((response) => response.data);
};

export default {
  getPopularMovies,
  foundMovies,
  detailMovies,
  getMoviesActors,
  getReviewMovies,
};

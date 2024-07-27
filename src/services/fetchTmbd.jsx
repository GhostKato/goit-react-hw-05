import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const options = {
  headers: {	
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYzM4MDE4NDYwZWJjZjE1NDc1MDNhODFiZTlhZmU0YyIsIm5iZiI6MTcyMTk1ODA0Ni43OTU5MzQsInN1YiI6IjY2YTJmYzk0Y2MxMmY2ODY4NzBhMjFlZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.apUkDmXZp0miEuDVQTumVIaVlnfr9ryHuqsdHS-eV4Q'
  }
};

export const getTrendingMovie = async (page) => {
  const { data } = await axios.get(`/trending/movie/day?page=${page}`, options);
  return data;
};

export const getDetalsMovie = async (movieId) => {
  const { data } = await axios.get(`/movie/${movieId}`, options);
  return data;
};

export const getCastMovie = async (movieId) => {
  const { data } = await axios.get(`/movie/${movieId}/credits`, options);
  return data;
};

export const getReviewsMovie = async (movieId) => {
  const { data } = await axios.get(`/movie/${movieId}/reviews`, options);
  return data;
};

export const getSearchMovie = async (query) => {
  const { data } = await axios.get(`/search/movie?query=${encodeURIComponent(query)}`, options);
  return data;
};



import axios from 'axios';

const API_KEY = '4170bf35f7a61b8012d65de6ad644b9b';
const BASE_URL = 'https://api.themoviedb.org/3/movie';

export const fetchPopularMovies = async () => {
  const response = await axios.get(`${BASE_URL}/popular?api_key=${API_KEY}&page=1`);
  return response.data.results;
};

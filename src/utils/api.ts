import axios from 'axios';

const API_KEY = '4170bf35f7a61b8012d65de6ad644b9b';
const BASE_URL = 'https://api.themoviedb.org/3';

const apiClient = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
  },
});

export const fetchPopularMovies = async (page: number = 1) => {
  try {
    const response = await apiClient.get('/movie/popular', {
      params: {
        page,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error('Error fetching popular movies:', error);
    throw error;
  }
};

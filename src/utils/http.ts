import axios from 'axios';

const API_KEY = '4170bf35f7a61b8012d65de6ad644b9b';
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchData = async (path: string, params: Record<string, any> = {}): Promise<any> => {
  try {
    const response = await axios.get(`${BASE_URL}${path}`, {
      params: {
        api_key: API_KEY,
        ...params,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

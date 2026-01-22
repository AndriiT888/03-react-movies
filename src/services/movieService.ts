import axios from 'axios';
import type { Movie } from '../types/movie';

interface MoviesResponse {
  results: Movie[];
}

const BASE_URL = 'https://api.themoviedb.org/3/search/movie';

export const fetchMovies = async (query: string): Promise<Movie[]> => {
  const token = import.meta.env.VITE_TMDB_TOKEN;
  if (!token) throw new Error('TMDB token is missing in .env');

  const response = await axios.get<MoviesResponse>(BASE_URL, {
    params: {
      query,
      language: 'en-US',
      page: 1,
    },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data.results;
};

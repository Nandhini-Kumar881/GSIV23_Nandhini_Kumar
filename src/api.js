import axios from 'axios';

const API_KEY = '61bb03cbeb7412d2392cab667b49b2b4';
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchUpcomingMovies = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/upcoming`, {
      params: {
        api_key: API_KEY,
      },
    });
    return response.data.results;
  } catch (error) {
    throw error;
  }
};

export const searchMovies = async (query) => {
  try {
    const response = await axios.get(`${BASE_URL}/search/movie`, {
      params: {
        api_key: API_KEY,
        query: query,
      },
    });
    return response.data.results;
  } catch (error) {
    throw error;
  }
};

export const fetchMovieDetails = async (movieId) => {
  try {
    const response = await fetch(
      `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`
    );
    if (!response.ok) {
      throw new Error('Failed to fetch movie details');
    }
    const data = await response.json();
    return {
      poster_path: data.poster_path,
      title: data.title,
      vote_average: data.vote_average,
      release_date: data.release_date,
      runtime: data.runtime,
      director: 'Director Name', 
      cast: ['Actor 1', 'Actor 2'], 
      overview: data.overview,
    };
  } catch (error) {
    throw error;
  }
};

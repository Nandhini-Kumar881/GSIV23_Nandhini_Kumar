export const SET_MOVIES = 'SET_MOVIES';
export const SET_SEARCH_QUERY = 'SET_SEARCH_QUERY';
export const SET_SELECTED_MOVIE = 'SET_SELECTED_MOVIE';

export const setMovies = (movies) => ({
  type: SET_MOVIES,
  payload: movies,
});

export const setSearchQuery = (query) => ({
  type: SET_SEARCH_QUERY,
  payload: query,
});

export const setSelectedMovie = (movie) => {
  return {
    type: SET_SELECTED_MOVIE,
    payload: movie,
  };
};

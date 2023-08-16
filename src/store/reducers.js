import { SET_MOVIES, SET_SEARCH_QUERY } from './actions';
import { SET_SELECTED_MOVIE } from './actions';


const initialState = {
  movies: [],
  searchQuery: '',
  selectedMovie: null,
};


const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MOVIES:
      return {
        ...state,
        movies: action.payload,
      };
    case SET_SEARCH_QUERY:
      return {
        ...state,
        searchQuery: action.payload,
      };
    case SET_SELECTED_MOVIE:
      return {
        ...state,
        selectedMovie: action.payload,
      };
    default:
      return state;
  }
};

export default moviesReducer;

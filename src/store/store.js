import { createStore, combineReducers } from 'redux';
import moviesReducer from './reducers';

const rootReducer = combineReducers({
  movies: moviesReducer,
});

const store = createStore(rootReducer);

export default store;

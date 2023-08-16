import React, { useState, useEffect } from 'react';
import { fetchUpcomingMovies, searchMovies } from '../api';
import MovieCard from '../components/MovieCard';
import HomePage from './HomePage';
import SearchIcon from '@mui/icons-material/Search';

const ListPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const loadMovies = async () => {
    try {
      setIsLoading(true);
      let fetchedMovies = await fetchUpcomingMovies();
      setMovies(fetchedMovies);
      setIsLoading(false);
    } catch (error) {
      console.error('Error loading movies:', error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadMovies();

  }, []);

  const handleSearch = async () => {
    if (searchQuery.trim() === '') {
      loadMovies();
    } else {
      try {
        setIsLoading(true);
        let searchedMovies = await searchMovies(searchQuery);
        setMovies(searchedMovies);
        setIsLoading(false);
      } catch (error) {
        console.error('Error searching movies:', error);
        setIsLoading(false);
      }
    }
  };

  return (
    <div className="list-page-container">
      <div className="search-bar">
        <div className="search-input-container">
        <button className="search-button" onClick={handleSearch}>
          <SearchIcon/>
           </button>
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <HomePage />
      </div>


      <div className="movie-list">
        {isLoading ? (
          <p>Loading movies...</p>
        ) : (
          movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
        )}
      </div>
    </div>
  );
};

export default ListPage;

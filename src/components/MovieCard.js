import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => (
  <Link to={`/details/${movie.id}`} className="movie-card-link" >
    <div className="movie-card">
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={movie.title}
        className="movie-card-image"
      />
      <div className="movie-card-content">
        <h3 className="movie-card-title">{movie.title}</h3>
        <p className="movie-card-rating">Rating: {movie.vote_average}</p>
        <p className="movie-card-description">{movie.overview}</p>
      </div>
    </div>
  </Link>
);

export default MovieCard;

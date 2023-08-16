import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails } from '../api';
import HomePage from './HomePage';

const DetailsPage = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    const loadMovieDetails = async () => {
      try {
        const details = await fetchMovieDetails(id);
        setMovieDetails(details);
      } catch (error) {
        console.error('Error loading movie details:', error);
      }
    };

    loadMovieDetails();
  }, [id]);

  if (!movieDetails) {
    return <p>Loading movie details...</p>;
  }

  return (
    <div className='HomePage'>
      <div className="search-input-container">
        <HomePage />
        <div className='MovedetailsTitle'>Movie Details</div>
      </div>
      <div className="horizontal-movie-card">
        <img
          src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`}
          alt={movieDetails.title}
          className="horizontal-movie-card-image"
        />
        <div className="horizontal-movie-card-content">
          <h3 className="horizontal-movie-card-title">{movieDetails.title} {`(Rating : ${movieDetails.vote_average})`}</h3>
          <p className="horizontal-movie-card-description">
            <div className="details-content">
              <p>{movieDetails.release_date} | {movieDetails.runtime} min | {movieDetails.director}</p>
              <p>Cast: {movieDetails.cast.join(', ')}</p>
              <p>Description: {movieDetails.overview}</p>
            </div>
          </p>
        </div>
      </div>
    </div>

  );
};

export default DetailsPage;

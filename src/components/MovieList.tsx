import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const MovieList: React.FC = () => {
  const movies = useSelector((state: RootState) => state.movies);

  return (
    <div className="container mt-4">
      <div className="row">
        {movies.map((movie) => (
          <div className="col-md-4 mb-4" key={movie.id}>
            <div className="card h-100">
              <img src={movie.image} className="card-img-top" alt={`${movie.title} poster`} />
              <div className="card-body">
                <h5 className="card-title">{movie.title}</h5>
                <p className="card-text">
                  <strong>Genre:</strong> {movie.genre}
                  <br />
                  <strong>Rating:</strong> {movie.rating}/5
                </p>
                <Link to={`/movie/${movie.id}`} className="btn btn-primary w-100">
                  View Showtimes
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;

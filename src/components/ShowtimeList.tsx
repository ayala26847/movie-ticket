import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { Link } from 'react-router-dom';

interface ShowtimeListProps {
  movieId: string;
}

const ShowtimeList: React.FC<ShowtimeListProps> = ({ movieId }) => {
  const showtimes = useSelector((state: RootState) =>
    state.showtimes.filter((showtime) => showtime.movieId === movieId)
  );

  return (
    <div className="container mt-4">
      <h3 className="text-center mb-4">Showtimes</h3>
      <ul className="list-group">
        {showtimes.map((showtime) => (
          <li key={showtime.id} className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              <strong>{showtime.theater}</strong> - {showtime.startTime}
              <br />
              <span
                className={`badge ${
                  showtime.availableSeats > 0 ? 'bg-success' : 'bg-danger'
                }`}
              >
                {showtime.availableSeats > 0 ? 'Seats Available' : 'Sold Out'}
              </span>
            </div>
            <Link
              to={`/booking/${showtime.id}`}
              className={`btn btn-sm ${
                showtime.availableSeats > 0 ? 'btn-primary' : 'btn-secondary disabled'
              }`}
            >
              Book Now
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShowtimeList;

import React from 'react';
import MovieList from '../components/MovieList';

const HomePage: React.FC = () => {
  return (
    <div>
      <h1>Welcome to the Movie Ticket Booking System</h1>
      <MovieList />
    </div>
  );
};

export default HomePage;

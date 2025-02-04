import React from 'react';
import { useParams } from 'react-router-dom';
import ShowtimeList from '../components/ShowtimeList';

const MoviePage: React.FC = () => {
  const { id } = useParams();

  return (
    <div>
      <h2>Movie Details</h2>
      <p>Selected Movie ID: {id}</p>
      <ShowtimeList movieId={id!} />
    </div>
  );
};

export default MoviePage;

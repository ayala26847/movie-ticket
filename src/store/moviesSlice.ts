import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Movie {
  id: string;
  title: string;
  genre: string;
  rating: number;
  duration: number;
  image:string;
}

  const initialState: Movie[] = [
    {
      id: '1',
      title: 'Inception',
      genre: 'Sci-Fi',
      rating: 4.8,
      duration: 148,
      image: 'https://image.tmdb.org/t/p/w500/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg',
    },
    {
      id: '2',
      title: 'Interstellar',
      genre: 'Sci-Fi',
      rating: 4.6,
      duration: 169,
      image: 'https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg',
    },
    {
        id: '3',
        title: 'Star',
        genre: 'Sci-Fi',
        rating: 4.7,
        duration: 120,
        image: 'https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg',
      },
  ];
  

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setMovies(state, action: PayloadAction<Movie[]>) {
      return action.payload;

    },

  },
});

export const { setMovies } = moviesSlice.actions;
export default moviesSlice.reducer;

import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from './moviesSlice';
import showtimesReducer from './showtimesSlice';

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    showtimes: showtimesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

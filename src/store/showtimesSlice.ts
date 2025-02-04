import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Showtime {
  id: string;
  movieId: string;
  theater: string;
  startTime: string;
  availableSeats: number;
}

const initialState: Showtime[] = [
    { id: '1', movieId: '1', theater: 'Theater 1', startTime: '7:00 PM', availableSeats: 10 },
    { id: '2', movieId: '1', theater: 'Theater 2', startTime: '9:00 PM', availableSeats: 0 },
    { id: '3', movieId: '2', theater: 'Theater 3', startTime: '8:00 PM', availableSeats: 5 },
    { id: '4', movieId: '3', theater: 'Theater 4', startTime: '10:00 PM', availableSeats: 2 },
  ];
  
const showtimesSlice = createSlice({
  name: 'showtimes',
  initialState,
  reducers: {
    setShowtimes(state, action: PayloadAction<Showtime[]>) {
      return action.payload;
    },
  },
});

export const { setShowtimes } = showtimesSlice.actions;
export default showtimesSlice.reducer;

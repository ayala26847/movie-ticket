import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Showtime {
  id: string;
  movieId: string;
  theater: string;
  startTime: string;
  availableSeats: number;
  unavailableSeats: string[];
}

const initialState: Showtime[] = [
    { id: '1', movieId: '1', theater: 'Theater 1', startTime: '7:00 PM', availableSeats: 100, unavailableSeats:[] },
    { id: '2', movieId: '1', theater: 'Theater 2', startTime: '9:00 PM', availableSeats: 100, unavailableSeats:[] },
    { id: '3', movieId: '2', theater: 'Theater 3', startTime: '8:00 PM', availableSeats: 100 , unavailableSeats:[]},
    { id: '4', movieId: '3', theater: 'Theater 4', startTime: '10:00 PM', availableSeats: 100 , unavailableSeats:[]},
  ];
  
const showtimesSlice = createSlice({
  name: 'showtimes',
  initialState,
  reducers: {
    setShowtimes(state, action: PayloadAction<Showtime[]>) {
      return action.payload;
    },
      updateUnavailableSeats(state, action: PayloadAction<{ id: string; seats: string[] }>) {
          const { id, seats } = action.payload;
          const showtime = state.find((s) => s.id === id);
          if (showtime) {
              showtime.unavailableSeats = seats;
          }
      },
  },
});

export const { setShowtimes, updateUnavailableSeats } = showtimesSlice.actions;
export default showtimesSlice.reducer;

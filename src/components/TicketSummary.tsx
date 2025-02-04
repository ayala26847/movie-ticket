import React from 'react';
import {Showtime} from "../store/showtimesSlice.ts";
interface TicketSummaryProps {
    selectedSeats: string[];
    showtime: Showtime;
}
const TicketSummary: React.FC<TicketSummaryProps> = ({selectedSeats, showtime}) => {

    const summary = {
    movie: showtime?.theater,
    showtime: showtime?.startTime,
    seats: selectedSeats,
    totalPrice: 45 * selectedSeats.length,
  };

  return (
    <div>
      <h3>Ticket Summary</h3>
      <p>Movie: {summary.movie}</p>
      <p>Start time: {summary.showtime}</p>
      <p>Seats: {summary.seats && summary.seats.join(', ')}</p>
      <p>Total Price: ${summary.totalPrice}</p>
    </div>
  );
};

export default TicketSummary;

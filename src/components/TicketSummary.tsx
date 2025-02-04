import React from 'react';
import {useSelector} from "react-redux";
import {RootState} from "../store/store.ts";
interface TicketSummaryProps {
    selectedSeats: string[];
    showtimeId: string;
}
const TicketSummary: React.FC<TicketSummaryProps> = ({selectedSeats, showtimeId}) => {

    const showTimes = useSelector((state: RootState) => state.showtimes);
    const currentShowTime = showTimes.find(s => s.id === showtimeId);

    const summary = {
    movie: currentShowTime?.theater,
    showtime: currentShowTime?.startTime,
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

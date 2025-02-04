import React from 'react';
interface TicketSummaryProps {
    selectedSeats: string[];
}
const TicketSummary: React.FC<TicketSummaryProps> = ({selectedSeats}) => {
  // Mock data for demonstration
  const summary = {
    movie: 'Example Movie',
    showtime: 'Theater 1, 8:00 PM',
    seats: selectedSeats,
    totalPrice: 45 * selectedSeats.length,
  };

  return (
    <div>
      <h3>Ticket Summary</h3>
      <p>Movie: {summary.movie}</p>
      <p>Showtime: {summary.showtime}</p>
      <p>Seats: {summary.seats && summary.seats.join(', ')}</p>
      <p>Total Price: ${summary.totalPrice}</p>
    </div>
  );
};

export default TicketSummary;

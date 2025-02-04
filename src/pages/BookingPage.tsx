import React, {useState} from 'react';
import { useParams } from 'react-router-dom';
import SeatMap from '../components/SeatMap';
import TicketSummary from '../components/TicketSummary';

const BookingPage: React.FC = () => {
  const { id } = useParams();
    const [selectedSeats, setSelectedSeats] = useState<string[]>([]);
  return (
    <div>
      <h2>Booking Page</h2>
      <p>Showtime ID: {id}</p>
      <SeatMap showtimeId={id!}  setSelectedSeats={setSelectedSeats}/>
      <TicketSummary selectedSeats={selectedSeats}/>
    </div>
  );
};

export default BookingPage;

import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {useParams} from 'react-router-dom';
import SeatMap from '../components/SeatMap';
import TicketSummary from '../components/TicketSummary';
import {updateUnavailableSeats} from "../store/showtimesSlice.ts";

const BookingPage: React.FC = () => {
    const {id} = useParams();
    const [selectedSeats, setSelectedSeats] = useState<string[]>([]);
    const dispatch = useDispatch();

    const handleSeatSelection = (newSeats: string[]) => {
        dispatch(updateUnavailableSeats({id: id, seats: newSeats}));
        setSelectedSeats([])
    };
    return (
        <div>
            <h2>Booking Page</h2>
            <p>Showtime ID: {id}</p>
            <SeatMap showtimeId={id!} setSelectedSeats={setSelectedSeats} selectedSeats={selectedSeats}/>
            <TicketSummary selectedSeats={selectedSeats}  showtimeId={id!}/>
            <button className="confirm-btn" onClick={() => handleSeatSelection(selectedSeats)}>Confirm Booking</button>
        </div>
    );
};

export default BookingPage;

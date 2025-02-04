import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useParams} from 'react-router-dom';
import SeatMap from '../components/SeatMap';
import TicketSummary from '../components/TicketSummary';
import {updateUnavailableSeats} from "../store/showtimesSlice.ts";
import {RootState} from "../store/store.ts";
import './BookingPage.css';

const BookingPage: React.FC = () => {
    const {id} = useParams();
    const [selectedSeats, setSelectedSeats] = useState<string[]>([]);
    const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false); // State for popup visibility
    const dispatch = useDispatch();
    const showTimes = useSelector((state: RootState) => state.showtimes);
    const currentShowTime = showTimes.find(s => s.id === id);

    const handleSeatSelection = () => {
        setIsPopupOpen(true); // Open the popup when seats are confirmed
    };

    const handleClosePopup = (newSeats: string[]) => {
        setIsPopupOpen(false); // Close the popup when user clicks confirm
        dispatch(updateUnavailableSeats({id: id, seats: newSeats}));
        setSelectedSeats([]);
    };

    return (
        <div>
            <h2>Booking Page</h2>
            <p>Showtime ID: {id}</p>
            <SeatMap showtimeId={id!} setSelectedSeats={setSelectedSeats} selectedSeats={selectedSeats}/>
            <TicketSummary selectedSeats={selectedSeats} showtime={currentShowTime}/>
            <button className="confirm-btn" onClick={handleSeatSelection}>Confirm Booking</button>

            {/* Popup */}
            {isPopupOpen && (
                <div className="popup-overlay">
                    <div className="popup-content">
                        <h3>Booking Confirmed!</h3>
                        <TicketSummary selectedSeats={selectedSeats} showtime={currentShowTime}/>
                        <button className="confirm-btn" onClick={() => handleClosePopup(selectedSeats)}>OK</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default BookingPage;

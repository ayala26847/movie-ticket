import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import {RootState} from "../store/store.ts";

interface SeatMapProps {
    showtimeId: string;
    selectedSeats: string[];
    setSelectedSeats: (selectedSeats) => void;
}

const SeatMap: React.FC<SeatMapProps> = (props,) => {
    const [selectedSeats, setSelectedSeats] = useState<string[]>([]);
    const showtime = useSelector((state: RootState) => state.showtimes.find(s => s.id == props.showtimeId));
    const unavailableSeats = showtime && showtime.unavailableSeats;
    const toggleSeat = (seat: string) => {
        setSelectedSeats((prev) =>
            prev.includes(seat) ? prev.filter((s) => s !== seat) : [...prev, seat]
        );
    };

    useEffect(() => {
        props.setSelectedSeats(selectedSeats);
    }, [selectedSeats])

    const seats = Array.from({length: 50}, (_, i) => `Seat ${i + 1}`);

    return (
        <div className="container mt-4">
            <h3>Seat Map</h3>
            <div className="row">
                {seats.map((seat) => (
                    <div className="col-2 mb-3" key={seat}>
                        <button
                            className={`btn btn-block ${props.selectedSeats.includes(seat) ? 'btn-success' : 'btn-outline-secondary'}`}
                            onClick={() => toggleSeat(seat)}
                            disabled={unavailableSeats && unavailableSeats.includes(seat)}
                        >
                            {seat}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SeatMap;

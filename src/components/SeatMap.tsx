import React, {useEffect, useState} from 'react';

interface SeatMapProps {
  showtimeId: string;
    setSelectedSeats: (selectedSeats)=> void;
}

const SeatMap: React.FC<SeatMapProps> = (props, ) => {
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);

  const toggleSeat = (seat: string) => {
    setSelectedSeats((prev) =>
      prev.includes(seat) ? prev.filter((s) => s !== seat) : [...prev, seat]
    );
  };

  useEffect(() => {
      props.setSelectedSeats(selectedSeats);
  },[selectedSeats])

  const seats = Array.from({ length: 50 }, (_, i) => `Seat ${i + 1}`);

  return (
    <div className="container mt-4">
      <h3>Seat Map</h3>
      <div className="row">
        {seats.map((seat) => (
          <div className="col-2 mb-3" key={seat}>
            <button
              className={`btn btn-block ${selectedSeats.includes(seat) ? 'btn-success' : 'btn-outline-secondary'}`}
              onClick={() => toggleSeat(seat)}
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

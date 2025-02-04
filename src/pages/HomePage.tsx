import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import MovieList from '../components/MovieList';
import {Genre} from "./consts.ts";



const HomePage: React.FC = () => {
    const [genreFilter, setGenreFilter] = useState<string>(''); // Genre filter
    const [ratingFilter, setRatingFilter] = useState<number>(0); // Rating filter
    const [searchQuery, setSearchQuery] = useState<string>(''); // Search by title
    const [error, setError] = useState<string>(''); // Error handling

    const movies = useSelector((state: RootState) => state.movies);

    const handleGenreChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setGenreFilter(e.target.value);
    };

    const handleRatingChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setRatingFilter(Number(e.target.value));
    };

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
    };

    const filteredMovies = movies.filter((movie) => {
        return (
            (genreFilter ? movie.genre === genreFilter : true) &&
            (ratingFilter > 0 ? movie.rating >= ratingFilter : true) &&
            (searchQuery ? movie.title.toLowerCase().includes(searchQuery.toLowerCase()) : true)
        );
    });

    // Error handling - if no movies found
    useEffect(() => {
        if (filteredMovies.length === 0 && searchQuery) {
            setError('No movies found with this title');
        } else {
            setError('');
        }
    }, [filteredMovies, searchQuery]); // Re-run the effect if filteredMovies or searchQuery change

    return (
        <div>
            <h1>Welcome to the Movie Ticket Booking System</h1>

            {/* Genre filter */}
            <div>
                <label>Select Genre:</label>
                <select value={genreFilter} onChange={handleGenreChange}>
                    <option value="">All</option>
                    {Object.values(Genre).map((genre) => (
                        <option key={genre} value={genre}>{genre}</option>
                    ))}
                </select>
            </div>

            {/* Rating filter */}
            <div>
                <label>Select Rating:</label>
                <select value={ratingFilter} onChange={handleRatingChange}>
                    <option value={0}>All</option>
                    <option value={1}>1 and up</option>
                    <option value={2}>2 and up</option>
                    <option value={3}>3 and up</option>
                    <option value={4}>4 and up</option>
                    <option value={5}>5</option>
                </select>
            </div>

            {/* Movie search */}
            <div>
                <label>Search for a Movie:</label>
                <input
                    type="text"
                    value={searchQuery}
                    onChange={handleSearch}
                    placeholder="Search by title"
                />
            </div>

            {/* Error handling */}
            {error && <div className="alert alert-danger">{error}</div>}

            {/* Display filtered movies */}
            <MovieList movies={filteredMovies} />
        </div>
    );
};

export default HomePage;
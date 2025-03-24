import React from 'react';
import './Total.css';

function MovieCard({ movie, removeFavourite , showModal}) {
    console.log("removeFavourite received:", removeFavourite);
    const handleRemove = (e) => {
        e.stopPropagation(); /*e.stopPropagation() is useful when:
        A child element has a click event, but you don't want it to trigger the parent’s click event.
        You want to prevent event bubbling in nested elements.*/
        if (typeof removeFavourite !== "function") {
            console.error("removeFavourite is not a function:", removeFavourite);
            return;
        }
        removeFavourite(movie);
    };

    return (
        <div className="movie-card" onClick={() => showModal(movie)}>
            <h3>{movie.Title}</h3>
            <div className="movie-poster">
                {movie.Poster && movie.Poster !== "N/A" ? (
                    <img src={movie.Poster} alt={movie.Title} />
                ) : (
                    <div className="no-poster">No Poster Available</div>
                )}
            </div>
            <div className="movie-details">
                <p><strong>Year:</strong> {movie.Year}</p>
                <p><strong>Rating:</strong> {movie.imdbRating}/10</p>
            </div>
            <button className="remove-button" onClick={handleRemove}>Remove</button>
        </div>
    );
}

export default MovieCard;

import React from 'react';
import MovieCard from './MovieCard';
import './Total.css';

function MovieList({ favorites , removeFavourite, showModal}) {
    return (
        <div className="movie-list-container">
            <h2>Favourite Movies</h2>
            {favorites.length === 0 ? (
                <p>No favorite movies yet. Search for a movie to add it to your favorites!</p>
            ) : (
                <div className="movie-list">
                    {favorites.map((movie) => (
                        <MovieCard key={movie.imdbID} movie={movie} removeFavourite={removeFavourite} showModal={showModal}/>
                    ))}
                </div>
            )}
        </div>
    );
}

export default MovieList;

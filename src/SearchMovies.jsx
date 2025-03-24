import React, { useState } from 'react';
import './Total.css';

function SearchMovies(props) {
    const [movieTitle, setMovieTitle] = useState('');

    const searchMovie = async (e) => {
        e.preventDefault();
        const url = `http://www.omdbapi.com/?apikey=bc2e4682&t=${movieTitle}`;

        try {
            const response = await fetch(url);
            const data = await response.json();
            if (data.Response === "True") {
                props.addFavourite(data);
                console.log(data);
            } else {
                console.log("Movie not found!");
                alert("Movie not found! Please try another title.");
            }
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="form-container">
            <form onSubmit={searchMovie} className="search-form">
                <label htmlFor="query">Movie Title</label>
                <input 
                    type="text" 
                    name="query" 
                    value={movieTitle} 
                    onChange={(e) => setMovieTitle(e.target.value)} 
                    placeholder="Enter a movie title" 
                    role="search" 
                    className="search-input"
                />
                <button type="submit" className="search-button">Search Movie</button>
            </form>
        </div>
    );
}

export default SearchMovies;

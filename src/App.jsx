import React, { useState } from 'react';
import './Total.css';
import SearchMovies from './SearchMovies';
import MovieList from './MovieList';
import MovieModal from './MovieModal';

function App() {
  const [favorites, setFavorites] = useState([]); 
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const addFavourite = (movie) => {
    // Check if movie is already in favorites
    if (!favorites.some(fav => fav.imdbID === movie.imdbID)) {
      setFavorites([...favorites, movie]);
    }
  };
  const removeFavourite = (movie) => {
    setFavorites(favorites.filter((fav) => fav.imdbID !== movie.imdbID));
  }
  const showModal = (movie) => {
    setSelectedMovie(movie);
    setIsModalOpen(true);
  }
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMovie(null);
  }

  return (
    <div className="App">
      <h1>Movie Search App</h1>
      <SearchMovies addFavourite={addFavourite} />
      <MovieList favorites={favorites} removeFavourite={removeFavourite} showModal={showModal} />
      { selectedMovie && (<MovieModal movie={selectedMovie} isModalOpen={isModalOpen} closeModal={closeModal} />)}
    </div>
  );
}

export default App;

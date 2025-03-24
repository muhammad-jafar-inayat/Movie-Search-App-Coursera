import Modal from 'react-modal';

function MovieModal({ movie, isModalOpen, closeModal }) {
    return (
        <Modal
            isOpen={isModalOpen}
            onRequestClose={closeModal}
            contentLabel={movie.Title}
            className="modal"
            overlayClassName="ReactModal__Overlay"
        >
            <button className="close-button" onClick={closeModal}>&times;</button>
            <div className="modal-content">
                <div className="movie-poster">
                    {movie.Poster && movie.Poster !== "N/A" ? (
                        <img src={movie.Poster} alt={movie.Title} />
                    ) : (
                        <div className="no-poster">No Poster Available</div>
                    )}
                </div>
                <div className="movie-info">
                    <h2>{movie.Title}</h2>
                    <p><strong>Year:</strong> {movie.Year}</p>
                    <p><strong>Genre:</strong> {movie.Genre}</p>
                    <p><strong>Rating:</strong> {movie.imdbRating}/10</p>
                    <p><strong>Runtime:</strong> {movie.Runtime}</p>
                    <p><strong>Actors:</strong> {movie.Actors}</p>
                    <p>{movie.Plot}</p>
                </div>
            </div>
        </Modal>
    );
}

export default MovieModal;

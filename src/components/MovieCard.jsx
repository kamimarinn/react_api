// import React from "react";
import { Link } from "react-router-dom";

import {FaStar} from 'react-icons/fa'

const imageURL = import.meta.env.VITE_IMG;

const MovieCard = ({ movie, showLink = true }) => {
    return(
        <div className="movie-card">
        <img src="{imageURL + movie.poster_path}" alt={movie.title}/>
        <div>{movie.title}</div>
        <p>
        <FaStar /> {movie.vote_average}
        </p>
        {showLink && <Link to={`/movie/${movie.id}`}>Detalhes</Link>}
        </div>
    );
};

export default MovieCard;
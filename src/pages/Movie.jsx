import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
    BsGraphUp,
    BsWallet2,
    BsHourglassSplit,
    BsFillFileEarmarkTextFill

} from 'react-icons/bs'

import MovieCard from "../components/MovieCard";

import './Movies.css'

const moviesURL = import.meta_env_VITE_API;
const apiKEY = import.meta_env_VITE_API_KEY;

const Movie = () => {
    const {id} useParams()
    const [movie, setMovie] = useState(null)

    const getMovie = async(url) => {
        const res = await fetch(url);
        const data = await res.json();

        setMovies(data);
    }

    const formatCurrency = (number) =>{
        return number.toLocaleString("en-US",{
            style: "currency",
            currency:"USD",

        });
    }

    useEffect(() => {
       const movieURL = `${movieURL}${id}?${apiKey}`
       getMovie(movieURL) 
    }
    )


    return(
        <div className="movie-page">{movie && (
        <>
        <MovieCard movie={movie} showLink={false} />
        <p className="tagline">{movie.tagline}</p>
        <div className="info">
        <h3>
        <BsWallet2 /> Orçamento:  
        </h3>    
        <p>{formatCurrency(movie.budet)}</p> 
        </div>
        <div className="info">
        <h3>
        <BsGraphUp /> Receitas:  
        </h3>   
        <p>{formatCurrency(movie.revenue)}</p>   
        </div>
        <div className="info">
        <h3>
        <BsHourglassSplit /> Duração: 
        </h3>   
        <p>{movie.runtime} minutos</p>  
        </div>
        <div className="info description">
        <h3>
        <BsFillFileEarmarkTextFill /> Descrição: 
        </h3>   
        <p>{movie.overview}</p>  
        </div>
        </>
        )}</div>
    )
}

export default Movie;
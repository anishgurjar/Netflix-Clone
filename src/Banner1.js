import React, { useState, useEffect } from "react";
import axios from "./axios";
import './Banner1.css'
import requests from "./requests";
import Herobutton from './Herobutton'
function Banner1() {

    const [movie, setMovie] = useState([]); //movie is the name of the variable in state, setMovie is used to change state

    useEffect(() => {

        //async function will make sure that the remaining code runs while the functions fetches the requests in the background
        async function fetchData() {
            const request =  await axios.get(requests.fetchNetflixOriginals); 
            setMovie( 
                request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1) //Pick up a random movie
             ]
            );
            return request;
          }
          fetchData();
        }, []);

    function truncate(str, n) {
      return str?.length > n ? str.substr(0, n - 1) + "..." : str; //If string is present in api result, then if length is greater than length, dont print full. else print string
    }

    return (
        <div id="hero" className="Hero" style={{backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`}}>
				<div className="content">
					<h1>{movie?.title || movie?.name || movie?.original_name}</h1>
					<p>{truncate(movie?.overview, 150)}</p>
					<div className="button-wrapper">
						<Herobutton primary={true} text="Watch now" />
						<Herobutton primary={false} text="+ My list" />
					</div>
				</div>
				<div className="overlay"></div>
			</div>
    )
}

export default Banner1
            
import React, { useState, useEffect } from "react";
import axios from "./axios";
import requests from "./requests";
import "./banner.css";

function Banner() {
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
        <header className="banner"
         style={{
            backgroundSize: "cover",
            backgroundImage: `url(
             "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}" //if movie is present then we take the image
        )`,
        backgroundPosition: "center center",
      }}
    >
        <div className="banner__contents">
            <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
            </h1>
            
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>

        <h1 className="banner__description">
          {truncate(movie?.overview, 150)}
        </h1>
      </div>

      <div className="banner--fadeBottom" />
    </header>
    )
}

export default Banner
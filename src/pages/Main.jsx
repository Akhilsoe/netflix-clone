import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import requests from "../Requests";

const Main = () => {
  const [movies, setMovies] = useState([]);

  const movie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    axios.get(requests.requestPopular).then((response) => {
      setMovies(response.data.results);
    });
  }, []);

  //console.log(movie);

  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else return str;
  };

  return (
    <div className="w-full h-[550px] text-white">
      <div className="w-full h-full">
        <div className="absolute w-full h-[550px] bg-gradient-to-r from-black">
          {" "}
        </div>
        <img
          className="w-full h-full object-cover"
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
        />
        <div className="absolute top-[20%] p-4 md:p-8">
          <h4 className="font-bold text-4xl md:7xl">{movie?.title}</h4>
          <div className="my-4">
            <button className="border border-gray-300 bg-gray-300 py-2 px-5 text-black">
              Play
            </button>
            <button className="border border-gray-300 ml-4 py-2 px-5 text-gray">
              Watch Later
            </button>
          </div>
          <p className="my-3 text-gray-400 text-sm">
            Released : {movie?.release_date}
          </p>
          <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] mb-3 text-gray-200">
            {truncateString(movie?.overview, 150)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;

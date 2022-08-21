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

  console.log(movie);

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
        <div>
          <div>
            <button className="border border-gray-300 bg-gray-300 py-2 px-5 text-black">
              Play
            </button>
            <button className="border border-gray-300 ml-4 py-2 px-5 text-white">
              Watch Later
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;

import axios from "axios";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import React, { useEffect, useState } from "react";
import Movie from "./Movie";

const Row = ({ title, fetchURL }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      "bg-white absolute rounded-full ";
      setMovies(response.data.results);
    });
  }, [fetchURL]);

  const slideLeft=[]

  return (
    <>
      <h2 className="text-white font-bold md:text-xl p-4 md:ml-3">{title}</h2>
      <div className="relative flex items-center group">
        <MdChevronLeft
          className="bg-white left-0 rounded-full absolute z-10 opacity-50 hover:opacity-100  cursor-pointer hidden group-hover:block"
          size={40}
        />
        <div
          id={"slider"}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative "
        >
          {movies.map((item, id) => (
            <Movie key={id} item={item} />
          ))}
        </div>
        <MdChevronRight
          className="bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100  cursor-pointer hidden group-hover:block"
          size={40}
        />
      </div>
    </>
  );
};

export default Row;

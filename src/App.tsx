import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");

  const searchMovies = async () => {
    try {
      const res = await fetch(
        "http://www.omdbapi.com/?i=${query}&apikey=24710146"
      );
      const data = await res.json();
      setMovies(data.Search);
    } catch {
      setMovies([]);
    }
  };

  return (
    <>
      <div className="p-10">
        <div className="flex">
          <i className="ri-movie-fill text-7xl"></i>
          <h1 className=" text-orange-500 text-6xl w-auto">Movies Search</h1>
        </div>
        <input
          type="text"
          className="w-6/12 mt-10"
          placeholder="Search movies hear..."
          onChange={(e) => {
            e.target.value;
          }}
          value={query}
        />
        <button
          className="border p-2 bg-cyan-700 text-white min-w-12"
          onClick={searchMovies}
        >
          Search
        </button>
      </div>
      {movies.map((movie) => {
        return(
        <div key={movie.imdbID}>
          <img src={movie.Poster} />
        </div>);
      })}
    </>
  );
}

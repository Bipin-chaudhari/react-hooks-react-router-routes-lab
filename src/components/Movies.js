import React from "react";
import { movies } from "../data";

function Movies() {
  return <div>
    <h1>Movies Page</h1>
    {movies.map((movie, index) => (
        <div key={index}>
          <h2>{movie.title}</h2>
          <h3>{movie.time}</h3>
          <ul>
            {movie.genres.map((movie, i) => (
              <li key={i}>{movie}</li>
            ))}
          </ul>
        </div>
      ))}
  </div>;
}

export default Movies;

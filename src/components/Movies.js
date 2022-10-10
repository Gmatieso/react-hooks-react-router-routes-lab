import React from "react";
import { movies } from "../data";


function Movies() {
// using map to loop through a set of data 
  const myMovies = movies.map((movie) =>(
    <div key={movie.index}>
      <h2>{movie.title}</h2>
    <p>Runtime: {movie.time} min.</p>

    <ul>
      {movies.genres.map((genre)=>
      (<li key={genre.index}>{genre}</li>
      ))}
    </ul>
    </div>
  ))
  return( 
    <div>
      <h1>Movies Page</h1>
      {myMovies}
    </div>
  );
}

export default Movies;

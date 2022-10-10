import React from "react";
import { directors } from "../data";

function Directors() {
// making a new div for each director then mapping the data 
const director = directors.map((director)=>
(<div key={director.index}>
  <h2>{director.name}</h2>
  <ul>
    {director.movies.map((movie)=>
    <li key={movie.index}>
      {movie}
    </li>
    )}
  </ul>
</div>

))
  return(
  <div>
    <h1>Directors  Page </h1> 
    {director}
  </div>);
}

export default Directors;

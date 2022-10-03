import React from "react";
import { directors } from "../data";

function Directors() {
// making a new div for each director then mapping the data 
const director = directors.map((directors)=>
(<div key={directors.index}>
  <h2>{directors.name}</h2>
  <ul>
    {directors.movies.map((movies)=>
    <li key={movies.index}>
      {movies}
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

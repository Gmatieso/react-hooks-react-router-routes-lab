import React from "react";
import { actors } from "../data";

function Actors() {
  // making a new div for each Actor then mapping the data 
  const actorsItems = actors.map((actor)=>
  (
    <div key={actor.name}>
      <h2>{actor.name}</h2>
      <ul>
        {actor.movies.map((muvi)=>
        <li key={muvi}>
          {muvi}
        </li>
        )}
      </ul>
    </div>
  ))

  return(
  <div>
    <h1> Actors Page</h1>
      {actorsItems}
  </div>);
}

export default Actors;

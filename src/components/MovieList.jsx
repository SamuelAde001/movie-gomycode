import React from "react";
import { MovieCard } from "./MovieCard";
import { Link } from "react-router-dom";

export const MovieList = ({ myMovies }) => {
  return (
    <div className="flex flex-wrap justify-center items-center gap-10">
      {/* maping through the movies data to render the detalils in the card */}
      {myMovies.map((m) => {
        return (
          // link to place the id of the movie on the url
          <Link to={`/${m.ID}`} key={m.ID}>
            <MovieCard m={m} />
          </Link>
        );
      })}
    </div>
  );
};

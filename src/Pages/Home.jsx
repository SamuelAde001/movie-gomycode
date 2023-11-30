// All the imports
import React, { useMemo, useState } from "react";
import { movies } from "../Movies";
import { BackgroundVideo } from "../components/BackgroundVideo";
import { Filter } from "../components/Filter";
import { AddMovie } from "../components/AddMovie";
import { MovieList } from "../components/MovieList";

export const Home = () => {
  // The state that collects all the movies
  const [myMovies, setMyMovies] = useState(movies);

  const [random, setRandom] = useState(0);

  // let memorize the movies ina a useMemo Hook

  const memorizedMovies = useMemo(() => {
    return { myMemorizedMovies: myMovies };
  }, [random]);

  return (
    <>
      <section className="flex flex-col space-y-10 items-center">
        <BackgroundVideo />
        <Filter setMyMovies={setMyMovies} memorizedMovies={memorizedMovies} />
        <AddMovie
          setMyMovies={setMyMovies}
          setRandom={setRandom}
          memorizedMovies={memorizedMovies}
        />
        {/* Condition to check if movie is true */}
        {myMovies.length === 0 ? (
          <div className="text-center py-24 text-3xl">
            Searched movies did not return any result
          </div>
        ) : (
          <MovieList myMovies={myMovies} />
        )}
      </section>
    </>
  );
};

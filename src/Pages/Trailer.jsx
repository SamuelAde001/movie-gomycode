import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { movies } from "../Movies";
import { Link } from "react-router-dom";
import { Button } from "antd";

export const Trailer = () => {
  const { MovieId } = useParams();
  const [theMovie, setTheMovie] = useState("");
  const [loading, setLoading] = React.useState(true);

  const movieFind = () => {
    console.log(MovieId);
    let movie = movies.find((item) => {
      return item.ID == MovieId;
    });
    setTheMovie(movie);
  };

  // Use Effect to run the moviefind funtion after page has loaded
  useEffect(() => {
    movieFind();
    const timeOut = setTimeout(() => {
      setLoading(false);
    }, 1000);
    // Cleanup timeout on component unmount
    return () => clearTimeout(timeOut);
  }, []);

  return (
    <>
      {/* if loading is true render loading until loading is false */}
      {loading ? (
        <div className="grid place-content-center h-[70vh]">
          <span>Loading...</span>
        </div>
      ) : (
        theMovie && (
          <div className="h-[70vh] grid place-items-center">
            {/* Button to return to prev page */}
            <Link to="/">
              <Button>Back</Button>
            </Link>

            {/* movie title */}
            <h2 className="text-3xl font-bold">{theMovie.title}</h2>

            {/* Trailer frame */}
            <iframe
              width="560"
              height="315"
              src={theMovie.trailer}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            {/* Description */}
            <p className="w-[600px] mx-auto">{theMovie.description}</p>
          </div>
        )
      )}
    </>
  );
};

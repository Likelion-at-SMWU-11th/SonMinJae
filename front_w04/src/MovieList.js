import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/movies")
      .then((response) => {
        setMovies(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>영화 리스트</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <h2>{movie.title}</h2>
            <p>{movie.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;

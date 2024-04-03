import React, { useState } from "react";
import "./App.css";
import Cards from "./Components/Cards";
import Navbar from "./Components/Navbar";
import Data from "./Data";

function App() {
  const [movies, setMovies] = useState(Data);

  function deleteRemover(id) {
    const newdata = movies.filter((movie) => movie.id !== id);
    setMovies(newdata);
  }
  return (
    <>
      <Navbar></Navbar>
      <Cards movies={movies} deleteRemover={deleteRemover}></Cards>
    </>
  );
}

export default App;

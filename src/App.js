import React from "react";
import DefaultHOC from "./HOC/DefaultHOC";
import HomePage from "./pages/HomePage";
import MovieHOC from "./HOC/MovieHOC";
import MoviePage from "./pages/MoviePage";
import Plays from "./pages/PlayPage";
import axios from "axios";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {};
axios.defaults.params["api_key"] = process.env.REACT_APP_API_KEY;

function App() {
  return (
    <>
      <DefaultHOC path='/' exact component={HomePage} />
      <MovieHOC path='/movie/:id' exact component={MoviePage} />
      <DefaultHOC path='/plays' exact component={Plays} />
    </>
  );
}

export default App;

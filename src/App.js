import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom'


import MovieList from './Movies/MovieList';
import SavedList from './Movies/SavedList';
import Movie from './Movies/Movie';

export default function App () {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movies, setMovies] = useState([]);


  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5001/api/movies') // Study this endpoint with Postman
        .then(response => {
          // Study this response with a breakpoint or log statements
      
          // and set the response data as the 'movies' slice of state
          setMovies(response.data)
        })
        .catch(error => {
          console.error('Server Error', error);
        })
    }
    getMovies();
  }, []);

  const addToSavedList = (movieId) => {
    const movieToAdd = movies.find(movie => movie.id === movieId);
    if (movieToAdd && !saved.find(savedMovie => savedMovie.id === movieId)) {
      setSaved([...saved, movieToAdd]);
    }
  };

  return (
    
    <div>
      <SavedList list={[ /* This is stretch */]} />
    
      <Routes>
      <Route path='/' element={<MovieList movies={movies} />}  />   
      <Route path='/movies/:id' element={<Movie addToSavedList={addToSavedList} />} />
      </Routes>

      <SavedList list={saved} />
      </div>
  );
  
}

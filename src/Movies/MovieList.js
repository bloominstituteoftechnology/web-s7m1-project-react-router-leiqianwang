import React from 'react';
import { useNavigate} from 'react-router-dom'
import MovieCard from './MovieCard';


export default function MovieList(props) {

  const navigate = useNavigate();
  
  const onMovieClick = id => () => {
       navigate(`movies/${id}`)
  }


  return (
    <div className="movie-card" onClick={onMovieClick}>
       {props.movies.map(movie => (
        <div key={movie.id} onClick={onMovieClick(movie.id)} className="movie-card">
          <MovieCard movie={movie} /> {/* Use MovieCard component */}
        </div>
      ))}
    </div>
  );
}
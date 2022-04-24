import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header/Header'
import Movies from './component/Movies/Movies';

function App() {
    const featured_api = `https://api.themoviedb.org/3/discover/movie?api_key=9e08110b66f194cb5fd50c3f6c7364a8&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`;

    const [movies, setMovies] = useState([])
    const [input, setInput] = useState('')
    useEffect(()=>{
        fetch(featured_api)
        .then( res => res.json())
        .then(data => setMovies(data.results))

    }, [])
     
  return (
    <div className='App'>
        <Header input={input} setInput={setInput} movies={movies} setMovies={setMovies}/>
        <div className='movie-container'>
        {movies.length > 0 && movies.map((movie)=>{
            return <Movies key={movie.id} movie={movie} />
        })}

        </div>
    </div>
  )
}

export default App
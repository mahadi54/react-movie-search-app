import React from 'react'

function Movies(props) {
    const image_api ='https://image.tmdb.org/t/p/w1280';
  return (
  <div className='movie'>
        <img src={image_api + props.movie.backdrop_path} />
        <div className='movie-info'>
            <span className='movie-info-title'>{props.movie.title}</span>
            <span>{props.movie.vote_average}</span>

        </div>
        <div className='movie-overview'>
            <h2>Overview:</h2>
            <p>{props.movie.overview}</p>

        </div>

      
  </div>

  )
}

export default Movies
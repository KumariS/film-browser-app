import React, { useEffect, useState } from 'react'
import FilmCard from '../components/FilmCard/FilmCard'
import { fetchFilmsByCategory } from '../api/tmdb'

const Home = () => {
  const [popular, setPopular] = useState([])
  const [topRated, setTopRated] = useState([])
  const [upcoming, setUpcoming] = useState([])

  useEffect(() => {
    fetchFilmsByCategory('popular').then(setPopular)
    fetchFilmsByCategory('top_rated').then(setTopRated)
    fetchFilmsByCategory('upcoming').then(setUpcoming)
  }, [])

  const renderCarousel = (title, films, category) => (
    <div className="carousel">
      <h2 className="carousel__title">{title}</h2>
      <div className="carousel__track">
        {films.map((film) => (
          <FilmCard
            key={film.id}
            id={film.id}
            title={film.title}
            poster_path={film.poster_path}
            category={category}
          />
        ))}
      </div>
    </div>
  )

  return (
    <div className="home">
      {renderCarousel('Popular Movies', popular, 'popular')}
      {renderCarousel('Top Rated Movies', topRated, 'top_rated')}
      {renderCarousel('Upcoming Movies', upcoming, 'upcoming')}
    </div>
  )
}

export default Home        

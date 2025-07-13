import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchFilmById, getImageUrl } from '../api/tmdb'
import { useWishList } from '../context/WishListContext'

const categoryStyles = {
  popular: { fontFamily: 'Arial', buttonClass: 'btn-popular' },
  top_rated: { fontFamily: 'Georgia', buttonClass: 'btn-top-rated' },
  upcoming: { fontFamily: 'Courier New', buttonClass: 'btn-upcoming' },
}

const FilmDetail = () => {
  const { id } = useParams()
  const [film, setFilm] = useState(null)
  const { addToWishList } = useWishList()

  useEffect(() => {
    if (id) {
      fetchFilmById(Number(id)).then(setFilm).catch(console.error)
    }
  }, [id])

  if (!film) return <div className="loading">Loading...</div>

  const category = film.popularity > 80 ? 'popular' : film.vote_average > 7 ? 'top_rated' : 'upcoming'
  const styles = categoryStyles[category]

  return (
    <div className="film-detail-page" style={{ fontFamily: styles.fontFamily }}>
      <header className="header">🎬 Film Details</header>

      <main className="main-content">
        <div className="image-area">
          <img src={getImageUrl(film.poster_path)} alt={film.title} />
        </div>
        <div className="info-area">
          <h1>{film.title}</h1>
          <p>{film.overview}</p>
          <button
            onClick={() =>
              addToWishList({ id: film.id, title: film.title, poster_path: film.poster_path, category })
            }
            className={`film-detail__button ${styles.buttonClass}`}
          >
            Add to Wish List
          </button>
        </div>
      </main>

      <section className="additional-info">
        <p><strong>Release Date:</strong> {film.release_date}</p>
        <p><strong>Rating:</strong> {film.vote_average}</p>
        <p><strong>Popularity:</strong> {film.popularity}</p>
      </section>
    </div>
  )
}

export default FilmDetail

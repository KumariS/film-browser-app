import React from 'react'   
import { useWishList } from '../../context/WishListContext'   
import { Link } from 'react-router-dom'   
import { getImageUrl } from '../../api/tmdb'   

const FilmCard = ({ id, title, poster_path, category }) => {
  const { addToWishList } = useWishList()   

  const handleAddToWishList = () => {
    addToWishList({ id, title, poster_path, category })   
  }   

  return (
    <div className={`film-card category-${category}`}>
      <Link to={`/film/${id}`}>
      <img
         src={getImageUrl(poster_path)}
         alt={title}
         className="film-card__image"
/>
        <h3 className="film-card__title">{title}</h3>
      </Link>
      <button onClick={handleAddToWishList} className="film-card__button">
        Add to Wish List
      </button>
    </div>
  )   
}   

export default FilmCard   

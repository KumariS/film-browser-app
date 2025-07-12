import React from 'react'
import { useWishList } from '../../context/WishListContext'
import { getImageUrl } from '../../api/tmdb'

const WishList = () => {
  const { wishList, removeFromWishList } = useWishList()

  if (wishList.length === 0) return <div>Your wish list is empty.</div>

  return (
    <div className="wishlist">
      <h2>Wish List</h2>
      <div className="wishlist__grid">
        {wishList.map((film) => (
          <div key={film.id} className="wishlist__card">
            <img src={getImageUrl(film.poster_path)} alt={film.title} className="wishlist__image" />
            <h3>{film.title}</h3>
            <button onClick={() => removeFromWishList(film.id)} className="wishlist__remove-button">
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default WishList     
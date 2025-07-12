import React, { createContext, useContext, useState } from 'react'

const WishListContext = createContext(undefined)

export const WishListProvider = ({ children }) => {
  const [wishList, setWishList] = useState([])

  const addToWishList = (film) => {
    setWishList((prev) => (prev.find((f) => f.id === film.id) ? prev : [...prev, film]))
  }

  const removeFromWishList = (id) => {
    setWishList((prev) => prev.filter((film) => film.id !== id))
  }

  return (
    <WishListContext.Provider value={{ wishList, addToWishList, removeFromWishList }}>
      {children}
    </WishListContext.Provider>
  )
}

export const useWishList = () => {
  const context = useContext(WishListContext)
  if (!context) {
    throw new Error('useWishList must be used within a WishListProvider')
  }
  return context
}      
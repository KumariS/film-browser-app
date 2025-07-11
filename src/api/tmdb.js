const API_KEY = import.meta.env.VITE_TMDB_API_KEY   
const BASE_URL = 'https://api.themoviedb.org/3'   
const IMG_BASE_URL = 'https://image.tmdb.org/t/p/w500'   

export const getImageUrl = (path) => `${IMG_BASE_URL}${path}`   

export const fetchFilmsByCategory = async (category) => {
  const res = await fetch(`${BASE_URL}/movie/${category}?api_key=${API_KEY}`)   
  if (!res.ok) throw new Error('Failed to fetch films')   
  const data = await res.json()   
  return data.results   
}   

export const fetchFilmById = async (id) => {
  const res = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`)   
  if (!res.ok) throw new Error('Failed to fetch film detail')   
  return res.json()   
}   

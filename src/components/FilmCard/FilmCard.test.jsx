import React from 'react'         
import { render, screen, fireEvent } from '@testing-library/react'         
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'         
import { MemoryRouter } from 'react-router-dom'         
import FilmCard from './FilmCard'         

// Mock context
vi.mock('../../context/WishListContext', () => ({
  useWishList: vi.fn(),
}))         

// Mock image helper
vi.mock('../../api/tmdb', () => ({
  getImageUrl: (path) => `https://mockimage.tmdb.org/${path}`,
}))         

// Re-import mock after mocking
import { useWishList } from '../../context/WishListContext'         

describe('FilmCard', () => {
  const mockAddToWishList = vi.fn()         

  const defaultProps = {
    id: 123,
    title: 'Dune',
    poster_path: 'dune.jpg',
    category: 'popular',
  }         

  beforeEach(() => {
    useWishList.mockReturnValue({ addToWishList: mockAddToWishList })         
  })         

  afterEach(() => {
    vi.clearAllMocks()         
  })         

  it('renders title and image', () => {
    render(
      <MemoryRouter>
        <FilmCard {...defaultProps} />
      </MemoryRouter>
    )         

    expect(screen.getByText('Dune')).toBeInTheDocument()         
    expect(screen.getByAltText('Dune')).toHaveAttribute('src', 'https://mockimage.tmdb.org/dune.jpg')         
  })         

  it('calls addToWishList when button is clicked', () => {
    render(
      <MemoryRouter>
        <FilmCard {...defaultProps} />
      </MemoryRouter>
    )         

    fireEvent.click(screen.getByText('Add to Wish List'))         
    expect(mockAddToWishList).toHaveBeenCalledWith({
      id: 123,
      title: 'Dune',
      poster_path: 'dune.jpg',
      category: 'popular',
    })         
  })         

  it('navigates to correct film detail URL', () => {
    render(
      <MemoryRouter>
        <FilmCard {...defaultProps} />
      </MemoryRouter>
    )         

    const link = screen.getByRole('link')         
    expect(link).toHaveAttribute('href', '/film/123')         
  })         
})         

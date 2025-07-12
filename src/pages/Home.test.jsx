import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import { vi } from 'vitest'
import Home from './Home'
import * as api from '../api/tmdb'

// Mock the FilmCard to simply render the title for easier assertions
vi.mock('../components/FilmCard/FilmCard', () => {
    return {
        default: ({ title }) => <div data-testid="film-card">{title}</div>,
    }
})

const popularFilms = [
    { id: 1, title: 'Popular Film 1', poster_path: '/pop1.jpg' },
    { id: 2, title: 'Popular Film 2', poster_path: '/pop2.jpg' },
]
const topRatedFilms = [
    { id: 3, title: 'Top Rated Film 1', poster_path: '/top1.jpg' },
]
const upcomingFilms = [
    { id: 4, title: 'Upcoming Film 1', poster_path: '/up1.jpg' },
    { id: 5, title: 'Upcoming Film 2', poster_path: '/up2.jpg' },
    { id: 6, title: 'Upcoming Film 3', poster_path: '/up3.jpg' },
]

describe('Home Component', () => {
    beforeEach(() => {
        // Mock fetchFilmsByCategory to resolve with corresponding arrays based on category
        vi.spyOn(api, 'fetchFilmsByCategory').mockImplementation((category) => {
            if (category === 'popular') return Promise.resolve(popularFilms)
            if (category === 'top_rated') return Promise.resolve(topRatedFilms)
            if (category === 'upcoming') return Promise.resolve(upcomingFilms)
            return Promise.resolve([])
        })
    })

    afterEach(() => {
        vi.restoreAllMocks()
    })

    it('calls fetchFilmsByCategory for all three categories', async () => {
        render(<Home />)

        await waitFor(() => {
            expect(api.fetchFilmsByCategory).toHaveBeenCalledTimes(3)
            expect(api.fetchFilmsByCategory).toHaveBeenCalledWith('popular')
            expect(api.fetchFilmsByCategory).toHaveBeenCalledWith('top_rated')
            expect(api.fetchFilmsByCategory).toHaveBeenCalledWith('upcoming')
        })
    })

    it('renders carousel titles correctly', async () => {
        render(<Home />)

        expect(screen.getByText('Popular Movies')).toBeInTheDocument()
        expect(screen.getByText('Top Rated Movies')).toBeInTheDocument()
        expect(screen.getByText('Upcoming Movies')).toBeInTheDocument()
    })

    it('renders correct number of FilmCard components for each category', async () => {
        render(<Home />)

        // Wait for FilmCard to render from async data
        await waitFor(() => {
            expect(screen.getAllByTestId('film-card').length).toBe(
                popularFilms.length + topRatedFilms.length + upcomingFilms.length
            )
        })

        // Check some film titles appear
        popularFilms.forEach(({ title }) => {
            expect(screen.getByText(title)).toBeInTheDocument()
        })
        topRatedFilms.forEach(({ title }) => {
            expect(screen.getByText(title)).toBeInTheDocument()
        })
        upcomingFilms.forEach(({ title }) => {
            expect(screen.getByText(title)).toBeInTheDocument()
        })
    })
})

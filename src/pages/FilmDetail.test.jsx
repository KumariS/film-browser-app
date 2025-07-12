import React from 'react'
import { render, screen, waitFor, fireEvent } from '@testing-library/react'
import { vi } from 'vitest'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import FilmDetail from './FilmDetail'

vi.mock('../api/tmdb', () => {
    const mockFilm = {
        id: 1,
        title: 'Inception',
        poster_path: '/inception.jpg',
        overview: 'A mind-bending thriller',
        popularity: 90,
        vote_average: 8.8,
    };

    return {
        fetchFilmById: vi.fn().mockResolvedValue(mockFilm),
        getImageUrl: (path) => `https://image.tmdb.org/t/p/w500${path}`,
    };
});

const addToWishListMock = vi.fn()
vi.mock('../context/WishListContext', () => {
    return {
        useWishList: () => ({
            addToWishList: addToWishListMock,
        }),
    }
})

describe('FilmDetail Component', () => {
    it('displays loading state initially', () => {
        renderWithRoute('/film/1')
        expect(screen.getByText(/loading/i)).toBeInTheDocument()
    })

    it('renders film details after fetch', async () => {
        renderWithRoute('/film/1')

        await waitFor(() => {
            expect(screen.getByText('Inception')).toBeInTheDocument()
        })

        expect(screen.getByText('A mind-bending thriller')).toBeInTheDocument()
        expect(screen.getByRole('img')).toHaveAttribute('src', expect.stringContaining('/inception.jpg'))
        expect(screen.getByRole('button', { name: /add to wish list/i })).toBeInTheDocument()
    })

    it('applies correct style for popular movies', async () => {
        renderWithRoute('/film/1')

        await waitFor(() => {
            const container = screen.getByRole('heading', { name: 'Inception' }).closest('div')
            expect(container).toHaveStyle({ fontFamily: 'Arial' })
        })
    })

    it('calls addToWishList on button click', async () => {
        renderWithRoute('/film/1')

        await waitFor(() => screen.getByText('Inception'))

        const button = screen.getByRole('button', { name: /add to wish list/i })
        fireEvent.click(button)

        expect(addToWishListMock).toHaveBeenCalledWith({
            id: 1,
            title: 'Inception',
            poster_path: '/inception.jpg',
            category: 'popular',
        })
    })
})

function renderWithRoute(initialPath) {
    render(
        <MemoryRouter initialEntries={[initialPath]}>
            <Routes>
                <Route path="/film/:id" element={<FilmDetail />} />
            </Routes>
        </MemoryRouter>
    )
}

import { createContext, useState, useContext, useEffect } from "react"

const PodcastContext = createContext()

export const usePodcastContext = () => useContext(PodcastContext)

export const PodcastProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([])

    useEffect(() => {
        const storedFavs = localStorage.getItem("favorites")

        if (storedFavs) setFavorites(JSON.parse(storedFavs))
    }, [])

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites))
    }, [favorites])

    const addToFavorites = (podcast) => {
        setFavorites(prev => [...prev, podcast])
    }

    const removeFromFavorites = (podcastId) => {
        setFavorites(prev => prev.filter(podcast => podcast.id !== podcastId))
    }

    const isFavorite = (podcastId) => {
        return favorites.some(podcast => podcast.id === podcastId)
    }

    const value = {
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite
    }

    return <PodcastContext.Provider value={value}>
        {children}
    </PodcastContext.Provider>
}

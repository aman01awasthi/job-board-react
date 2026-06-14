import { createContext, useContext, useState } from "react";

export const FavouritesContext = createContext();

export const FavouritesProvider = ({children}) => {
    const [favourite, setFavourite] = useState([]);

    const handleAddFavourite = (job) => {
        setFavourite(prev => [...prev, job])
    }

    const handleRemoveFavourite = (job) => {
        setFavourite(prev => prev.filter(jobs => jobs.id !== job.id));
    }

    const isFavourite = (id) => {
        return favourite.some(jobs => jobs.id === id);
    }

    return(
        <FavouritesContext.Provider value={{favourite, handleAddFavourite, handleRemoveFavourite, isFavourite}}>
            {children}
        </FavouritesContext.Provider>
    )
}

export const useFavourite = () => useContext(FavouritesContext);
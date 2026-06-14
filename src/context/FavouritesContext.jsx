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

    return(
        <FavouritesContext.Provider value={{favourite, handleAddFavourite}}>
            {children}
        </FavouritesContext.Provider>
    )
}

export const useFavourite = () => useContext(FavouritesContext);
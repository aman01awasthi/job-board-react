import { createContext, useContext, useState } from "react";

export const FavouritesContext = createContext();

export const FavouritesProvider = ({children}) => {
    const [favourite, setFavourite] = useState([]);

    return(
        <FavouritesContext.Provider value={{favourite}}>
            {children}
        </FavouritesContext.Provider>
    )
}

export const useFavourite = () => useContext(FavouritesContext);
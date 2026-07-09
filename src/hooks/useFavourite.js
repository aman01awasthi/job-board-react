import { useContext } from "react";
import { FavouritesContext } from "../context/FavouritesContext";

export const useFavourite = () => useContext(FavouritesContext);

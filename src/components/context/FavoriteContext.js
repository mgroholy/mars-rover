import { createContext } from "react";

const FavoriteCollection = [[], () => {}];

const FavoriteContext = createContext(FavoriteCollection);

export default FavoriteContext;

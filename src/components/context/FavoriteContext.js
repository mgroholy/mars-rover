import React, { createContext, useState } from "react";

const FavoriteCollection = [[], () => {}];

export const FavoriteContext = createContext(FavoriteCollection);

export const FavoriteProvider = (props) => {
  const favoriteHook = useState([]);
  return (
    <FavoriteContext.Provider value={favoriteHook}>
      {props.children}
    </FavoriteContext.Provider>
  );
};

export default FavoriteContext;

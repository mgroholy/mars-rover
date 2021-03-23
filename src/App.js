import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home/Home";
import PhotoList from "./components/pages/Photos/list-page/PhotoList";
import PhotoDetail from "./components/pages/Photos/detail-page/PhotoDetail";
import RoverList from "./components/pages/RoverList/RoverList";
import RoverDetail from "./components/pages/RoverDetail/RoverDetail";
import FavoriteContext from "./components/context/FavoriteContext";
import { useState } from "react";
import FavoritePhotoList from "./components/pages/FavoritePhotoList/FavoritePhotoList";

function App() {
  const favoriteHook = useState([]);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/rovers" exact component={RoverList} />
          <Route path="/rovers/:name" exact component={RoverDetail} />
          <Route path="/photos" component={PhotoList} />
          <FavoriteContext.Provider value={favoriteHook}>
            <Route path="/photo/:id" component={PhotoDetail} />
            <Route path="/favorites" component={FavoritePhotoList} />
          </FavoriteContext.Provider>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

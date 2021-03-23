import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home/Home";
import PhotoDetail from "./components/pages/Photos/detail-page/PhotoDetail";
import RoverList from "./components/pages/RoverList/RoverList";
import PhotoList from "./components/pages/Photos/PhotoList";
import RoverDetail from "./components/pages/RoverDetail/RoverDetail";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/rovers" exact component={RoverList} />
          <Route path="/photos" component={PhotoList} />
          <Route path="/photo/:id" component={PhotoDetail} />
          <Route path="/rovers/:name" exact component={RoverDetail} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

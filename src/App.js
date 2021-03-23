import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home/Home";
import RoverList from "./components/pages/RoverList/RoverList";
import PhotoList from "./components/pages/Photos/PhotoList";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/rovers" exact component={RoverList} />
          <Route path="/photos" component={PhotoList} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

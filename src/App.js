import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home/Home";
import RoverList from "./components/pages/RoverList/RoverList";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/rovers" exact component={RoverList} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

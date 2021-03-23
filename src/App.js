import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home/Home";
import PhotoList from "./components/pages/Photos/list-page/PhotoList";
import PhotoDetail from "./components/pages/Photos/detail-page/PhotoDetail";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/photos" component={PhotoList} />
          <Route path="/photo/:id" component={PhotoDetail} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

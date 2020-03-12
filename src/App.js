import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./component/static/Navbar";
import Overview from "./pages/detail/Overview";
import Character from "./pages/detail/Character";
import Preview from "./pages/detail/Preview";
import Footer from "./component/static/Footer";
import "./asset/style.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/detail/overview" component={Overview} />
            <Route path="/detail/characters" component={Character} />
            <Route path="/detail/preview" component={Preview} />
          </Switch>
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;

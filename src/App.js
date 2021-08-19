import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { WeatherPage } from "./WeatherPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={WeatherPage} />
      </Switch>
    </Router>
  );
}

export default App;

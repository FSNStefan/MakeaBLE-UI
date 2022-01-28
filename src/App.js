import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./icons.js";
import MainWindow from "./screens/MainWindow";
import MainWindowAi from "./screens/MainWindowAi";
import MainWindowLabels from "./screens/MainWindowLabels";


import {MakeaBLEProvider} from "./contexts/MakeaBLEContext";
import "./style.css";

function App() {
  return (
    <MakeaBLEProvider>
    <Router >
      <Switch>
      <Route path="/" exact component={MainWindow} />
      <Route path="/MainWindow/" exact component={MainWindow} />
      <Route path="/MainWindowAi/" exact component={MainWindowAi} />
      <Route path="/MainWindowLabels/" exact component={MainWindowLabels} />
      </Switch>
    </Router>
    </MakeaBLEProvider>
  );
}

export default App;

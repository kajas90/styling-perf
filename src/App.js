import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import User from "./components/User";
import Logo from "./components/Logo";

import "./App.css";

const kids = [
  {
    name: "Eleven"
  },
  {
    name: "Mike",
    surname: "Wheeler"
  },
  {
    name: "Dustin",
    surname: "Henderson"
  },
  {
    name: "Lucas",
    surname: "Sinclair"
  },
  { name: "Will", surname: "Byers" }
];

function App() {
  const [storedKids, setKids] = useState(kids);
  const listStyle = {
    display: "flex",
    flexWrap: "wrap"
  };
  return (
    <Router>
      <div>
        <header>
          <Logo />
          <nav>
            <Link to="/">home</Link>
            <Link to="/kids">kids</Link>
          </nav>
        </header>
        <Switch>
          <Route
            path="/"
            render={() => (
              <div>
                <button
                  onClick={() =>
                    setKids([...kids, { name: "Max", surname: "Mayfield" }])
                  }
                >
                  add kid
                </button>
                <div style={listStyle}>
                  {[...Array(1000)].map(() =>
                    storedKids.map(kid => <User {...kid} key={kid.name} />)
                  )}
                </div>
              </div>
            )}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

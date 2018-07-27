import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Guestbook from "./pages/Guestbook";
import Itinerary from "./pages/Itinerary";
import RSVP from "./pages/RSVP";
import Nav from "./components/Nav";

const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/guestbook" component={Guestbook} />
        <Route exact path="/RSVP" component={RSVP} />

        <Route component={Itinerary} />
      </Switch>
    </div>
  </Router>
);

export default App;

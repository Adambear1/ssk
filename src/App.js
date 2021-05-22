import React, { Suspense, lazy, useState, useEffect } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import "react-slideshow-image/dist/styles.css";
import Loader from "./components/Loader";
import { load_timer } from "./utils/timers";
import "./utils/desktop-css.css"
import "./utils/iphoneX-css.css"
import "./utils/ipad-css.css"
import "./utils/general-css.css"
import "./utils/transition-css.css"



const Home = lazy(() => import("./pages/Home"));

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), load_timer);
  }, []);
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Switch>
          {loading ? <Loader /> : <Route exact path="/" component={Home} />}
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;

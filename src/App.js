import React, { Suspense, lazy, useState, useEffect } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import 'react-slideshow-image/dist/styles.css'
import "./styles.css";
import Loader from "./components/Loader";
const Home = lazy(() => import("./pages/Home"));

function App() {
  const time = 100
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(()=> setLoading(false), time)
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

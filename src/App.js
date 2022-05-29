import React, { Suspense, lazy, useState, useEffect, useMemo } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import "react-slideshow-image/dist/styles.css";
import Loader from "./components/Loader";
import { load_timer } from "./utils/timers";
import reducer from "./reducer";
// import { createStore } from "redux";
import { Provider } from "react-redux";
import "./utils/desktop-css.css";
import "./utils/iphone5-css.css";
import "./utils/iphone8-css.css";
import "./utils/iphoneX-css.css";
import "./utils/ipad-css.css";
import "./utils/general-css.css";
import "./utils/transition-css.css";
import TagManager from "react-gtm-module";
const Home = lazy(() => import("./pages/Home"));

const tagManagerArgs = {
  gtmId: "GTM-N5D3GQX",
};
TagManager.initialize(tagManagerArgs);

function App() {
  const [loading, setLoading] = useState(true);
  // const store = createStore(reducer);
  useEffect(() => {
    const timer = window.location.href.includes("http://localhost:3000/") ? 0 : load_timer;
    setTimeout(() => setLoading(false), timer);
  }, []);

  return (
    // <Provider store={store}>
    <Router>
      <Suspense fallback={<Loader />}>
        <Switch>
          {loading ? <Loader /> : <Route path="/" component={Home} />}
        </Switch>
      </Suspense>
    </Router>
    // </Provider>
  );
}

export default App;

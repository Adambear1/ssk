import React from "react";
import Loader from "./components/Loader";
import reducer from "./reducer";
import { createStore } from "redux";
import { Provider } from "react-redux";
import "./utils/transition-css.css"
import "./utils/general-css.css"
import "./utils/desktop-css.css"
const Home = React.lazy(() => import("./pages/Home"));

export default function App() {
  const [load_timer] = React.useState(1800);
  const [loading, setLoading] = React.useState(false);
  const store = createStore(reducer);
  React.useEffect(() => setTimeout(() => setLoading(false), 1800 /*timer*/), []);
  const timer = window.location.href.includes("http://localhost:3000/") ? 0 : load_timer;


  return (
    

    <Provider store={store}>
       <React.Suspense fallback={<Loader />}> 
          <Home/>
        </React.Suspense>
    </Provider>
  );
}
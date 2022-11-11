import React from "react";
import BulletinBoard from "../components/Slider/BulletinBoard";
import Contact from "../components/Contact/index";
import Location from "../components/Location/index";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Slider from "../components/Slider";
import Menu from "../components/Menu";
import {useDispatch, useSelector} from "react-redux"
import Catering from "../components/Catering";

export default function Home() {
  const store = useSelector(store => store);
  const dispatch = useDispatch();
  const [display, setDisplay] = React.useState(null);
  const [currentPage, setCurrentPage] = React.useState("home");
  const [payload, setPayload] = React.useState(store || {});
  React.useEffect(()=> {
    setCurrentPage("home");
    dispatch({type: "SETTINGS_CHANGE", payload});
  },[]);
  React.useEffect(()=>{
    document.title = `Seven Son's Kitchen - ${currentPage.replace(
      /\w\S*/g,
      function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      }
    )}`
  }, [currentPage]);
  window.addEventListener("resize", ({currentTarget: {outerWidth, outerHeight}}) => {
    setPayload({...payload, height: outerHeight, width: outerWidth})
  });
  return (
    <div className="main">
      <Header store={store}/>
      <BulletinBoard store={store} />
      <Footer store={store} setDisplay={setDisplay} display={display} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
      <Slider
        display={display}
      >
       {display === "Catering" &&  <Catering styles={styles} currentPage={currentPage} setCurrentPage={setCurrentPage}/>} 
          {display === "Menu" && <Menu styles={styles} currentPage={currentPage} setCurrentPage={setCurrentPage}/>}
          {display === "Contact" && <Contact styles={styles} currentPage={currentPage} setCurrentPage={setCurrentPage}/>}
          {display === "Map" &&  <Location styles={styles} currentPage={currentPage} setCurrentPage={setCurrentPage}/>}
      </Slider>
    </div>
  );
}

const styles = {
  height: "90vh",
  position: "absolute",
  zIndex: 100,
  left: 0,
  width: "100%",
  opacity: "100%",
}
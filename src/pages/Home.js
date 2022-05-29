import React, { useState } from "react";
import BulletinBoard from "../components/Slider/BulletinBoard";
import Contact from "../components/Contact/index";
import Location from "../components/Location/index";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Slider from "../components/Slider";
import Menu from "../components/Menu";
import {useDispatch, useSelector} from "react-redux"
import Catering from "../components/Catering";

function Home() {
  const [display, setDisplay] = useState(null);
  const [currentPage, setCurrentPage] = useState("home");
  const store = useSelector(store => store);
  const [payload, setPayload] = useState(store || {});
  const dispatch = useDispatch();
  React.useEffect(()=> {
    setCurrentPage("home");
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
  React.useMemo(()=>{    
    navigator.getBattery().then(({level})=> {
      setPayload({...payload, battery : level})
    });
      dispatch({type: "SETTINGS_CHANGE", payload});
  }, [])
  
  const styles = {
        height: "90vh",
        position: "absolute",
        zIndex: 100,
        left: 0,
        width: "100%",
        opacity: "100%",
  }
  return (
    <div className="main">
      <Header />
      <BulletinBoard />
      <Footer setDisplay={setDisplay} display={display} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
      <Slider
        display={display}
      >
          {display === "Menu" && <Menu styles={styles} currentPage={currentPage} setCurrentPage={setCurrentPage}/>}
          {display === "Contact" && <Contact styles={styles} currentPage={currentPage} setCurrentPage={setCurrentPage}/>}
          {display === "Map" &&  <Location styles={styles} currentPage={currentPage} setCurrentPage={setCurrentPage}/>}
          {display === "Catering" &&  <Catering styles={styles} currentPage={currentPage} setCurrentPage={setCurrentPage}/>}
      </Slider>
    </div>
  );
}

export default Home;

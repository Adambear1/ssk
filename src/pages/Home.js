import React, { useState, useEffect } from "react";
import BulletinBoard from "../components/BulletinBoard";
import Contact from "../components/Contact/index";
import Location from "../components/Location/index";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Slider from "../components/Slider";
import Menu from "../components/Menu";
import dataLayer from "../dataLayer";

function Home() {
  const [display, setDisplay] = useState(null);
  const [currentPage, setCurrentPage] = useState("home");
  React.useEffect(()=> {
    dataLayer({eventCategory: "home", eventAction: "pageView", eventLabel: currentPage});
    setCurrentPage("home");
  },[]);
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
      <Footer setDisplay={setDisplay} display={display} />
      <Slider
        display={display}
      >
          {display === "Menu" && <Menu styles={styles} currentPage={currentPage} setCurrentPage={setCurrentPage}/>}
          {display === "Contact" && <Contact styles={styles} currentPage={currentPage} setCurrentPage={setCurrentPage}/>}
          {display === "Map" &&  <Location styles={styles} currentPage={currentPage} setCurrentPage={setCurrentPage}/>}
      </Slider>
    </div>
  );
}

export default Home;

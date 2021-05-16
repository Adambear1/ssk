import React, { useEffect } from "react";
import "./styles.css";
import slide_1 from "../assets/slide_1.jpg"
import slide_2 from "../assets/slide_2.jpg"
function SlideShow() {
  useEffect(() => {
      var slideIndex = 0;
      var slides = document.getElementsByClassName("mySlides");
      for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slideIndex++;
      if (slideIndex > slides.length) {
        slideIndex = 1;
      }
      slides[slideIndex - 1].style.display = "block";
  }, []);
  return (
    <div
      class="slideshow-container"
      style={{ position: "absolute", width:"100%", margin: "auto", height: "500px" }}
    >
      <div class="mySlides fade">
        <img src={slide_1} style={{width: "100%", height: "600px"}} alt="Delicious Food"/>
      </div>

      <div class="mySlides fade">
        <img src={slide_2} style={{width: "100%", height: "600px"}}alt="Best In Tacoma" />
      </div>
      {/* <div class="mySlides fade">
        <div class="numbertext">3 / 3</div>
        <img src="img3.jpg" style="width:100%" />
        <div class="text">Caption Three</div>
      </div> */}
    </div>
  );
}

export default SlideShow;

import React from "react";
import image_one from "../../assets/meats_vegges.jpg";
import image_two from "../../assets/chicken6.jpg";
import image_three from "../../assets/burnttips1.jpg";
import image_four from "../../assets/ribs3.jpg";
import image_five from "../../assets/slider1.jpg";
import image_six from "../../assets/side-min.png";

const images = [image_one, image_two, image_three, image_four, image_five, image_six];

export default function SlideShow({ children }) {
  const [image, setImage] = React.useState(images[0])
  React.useEffect(()=> {
    const update = setTimeout(()=>{
      var random = Math.floor(Math.random()*images.length)
      var selection = images[random];
      if(selection){
        setImage(selection);
      }
      else{
        return () => clearInterval(update);
      }
    }, 5000);
    return () => clearInterval(update);
  }, [image]);
  return (
    <div
      className="slide-container animate__animated animate__fadeIn"
      style={slideShow_container}
    >
      {children}
            <div className="each-fade animate__animated animate__fadeIn">
            <div
              style={slideShow_image_container}
            >
              <img src={image} style={slideShow_image} alt="#SSK" />
            </div>
          </div>
    </div>
  );
}

export const {slideShow_container, slideShow_image_container, slideShow_image} = {
  slideShow_container: {
    position: "absolute",
    width: "100%",
    margin: "auto",
    height: "80vh",
  },
  slideShow_image_container: {
    zIndex: -10,
  },
  slideShow_image: {
    width: "100%",
    height: "88vh",
    maxHeight: "92vh",
    opacity: "60%",
    // objectFit: "cover",
    objectPosition: "center"
  },
};

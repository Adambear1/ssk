import React from "react";
import dataLayer from "../../dataLayer";
import Information from "./Information";

function Contact({currentPage, setCurrentPage}) {
  React.useEffect(()=> {
    dataLayer({eventCategory: "contact", eventAction: "pageView", eventLabel: currentPage});
    setCurrentPage("contact");
  },[])
  const social_media = [
    {
      name: "Facebook",
      link: "",
      button: `<a className="waves-effect center waves-light btn-large social-media-btn social facebook blue darken-4" href="http://bit.ly/sevensons-fb" target="_blank" rel="noreferrer">
            <i className="fa fa-facebook center"></i>   Facebook</a>`,
      screenshot: "",
    },
    {
      name: "Instagram",

      button: `<a className="waves-effect center waves-light btn-large social-media-btn social instagram pink lighten-1" href="http://bit.ly/ssk-ig" target="_blank" rel="noreferrer">
            <i className="fa fa-instagram center"></i>  Instagram</a>`,
      screenshot: "",
    },
    {
      name: "LinkedIn",
      link: "",
      button: `<a className="waves-effect center waves-light btn-large social-media-btn social twitter blue lighten-3" href="https://twitter.com/7SonsKitchen" target="_blank" rel="noreferrer">
            <i className="fa fa-twitter center"></i>    Twitter</a>`,
      screenshot: "",
    },
    {
      name: "Twitter",
      link: "",
      button: `<a className="waves-effect center waves-light btn-large social-media-btn social linkedin blue" href="http://bit.ly/ssk-linkedin
            " target="_blank" rel="noreferrer">
            <i className="fa fa-linkedin center"></i>   LinkedIn</a>`,
      screenshot: "",
    },
    // {
    //   name: "Snapchat",
    //   link: "",
    //   button: `<a className="waves-effect center waves-light btn-large social-media-btn social snapchat yellow accent-4"  href="http://bit.ly/sevensons-fb" target="_blank" rel="noreferrer">
    //         <i className="fa fa-snapchat center"></i>   LinkedIn</a>`,
    //   screenshot: "",
    // },
    // {
    //   name: "Yelp",
    //   link: "",
    //   button: `<a className="waves-effect center waves-light btn-large social-media-btn social yelp red accent-4"  href="http://bit.ly/sevensons-fb" target="_blank" rel="noreferrer">
    //         <i className="fa fa-yelp center"></i>   Yelp</a>`,
    //   screenshot: "",
    // },
  ];
  return (
    <div className="container grey lighten-2 animate__animated animate__fadeIn">
      <Information social_media={social_media} />
    </div>
  );
}

export default Contact;

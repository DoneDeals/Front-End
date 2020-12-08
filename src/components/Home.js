
import "../css/home.css";
import React from "react";
import Footer from "./Footer";
import Header from "./Header";

class Home extends React.Component {
    render() {
      return (
        <div className="recGalleryContainer">
        <Header titleHeader="Welcome to Done Deals"/>
          
          <Footer />
        </div>
            );
            }
          }
  export default (Home);
  
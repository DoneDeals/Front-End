import React from 'react'
import Footer from "./Footer";
import Header from "./Header";
import "../css/header.css";
import "../css/footer.css";
import Image from '../images/bluetshirt.jpg';
function BuyPage() {
    return (
      <div className="recGalleryContainer">
        <Header titleHeader="Buy Page"/>
        <div className="flex-container">
  <div><img src={Image} alt="Logo" /></div>
  <div><img src={Image} alt="Logo" /></div>
  <div><img src={Image} alt="Logo" /></div>
  <div><img src={Image} alt="Logo" /></div>
  <div><img src={Image} alt="Logo" /></div>
  <div><img src={Image} alt="Logo" /></div>
  <div><img src={Image} alt="Logo" /></div>
  <div><img src={Image} alt="Logo" /></div>
  <div><img src={Image} alt="Logo" /></div>
  <div><img src={Image} alt="Logo" /></div>
</div>
          <Footer />
        </div>
       )
}

export default BuyPage

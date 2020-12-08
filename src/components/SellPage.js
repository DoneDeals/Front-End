import React from 'react'
import Footer from "./Footer";
import Header from "./Header";
import "../css/product.css";
import Image from '../images/bluetshirt.jpg';
function SellPage() {
    return (
        <div className="recGalleryContainer">
        <Header titleHeader="Sell Page"/>
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

export default SellPage

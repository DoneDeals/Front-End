import React from 'react'
import Footer from "./Footer";
import Header from "./Header";
import "../css/product.css";
function SellPage() {
    return (
        <div className="recGalleryContainer">
        <Header titleHeader="Sell Page"/>
        <div className="flex-container">
        <div>Product One</div>
  <div>Product Two</div>
  <div>Product Three</div>  
  <div>Product Four</div>
  <div>Product Five</div>
  <div>Product Six</div>  
  <div>Product Seven</div>
  <div>Product Eight</div>
</div>
          <Footer />
        </div>
    )
}

export default SellPage

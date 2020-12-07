import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home.js";
import SellPage from "./components/SellPage";
import ContactPage from "./components/ContactPage";
import BuyPage from "./components/BuyPage";
import PageonePage from "./components/PageonePage";
function App() {
  return (
    <>
<Router>
      <Route path="/" exact component={Home} />
      <Route path="/home" component={Home} />
      <Route path="/sell" component={SellPage} />
      <Route path="/buy" component={BuyPage} />
      <Route path="/pageone" component={PageonePage} />
      <Route path="/contact" component={ContactPage} />
     
</Router>

    </>
  );
}

export default App;

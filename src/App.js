import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home.js";
import SellPage from "./components/SellPage";
import ContactPage from "./components/ContactPage";
import BuyPage from "./components/BuyPage";
import PageonePage from "./components/PageonePage";
import SigninPage from "./components/SigninPage";
import SignupPage from "./components/SignupPage";
import SignoutPage from "./components/SignoutPage";
function App() {
  return (
    <>
<Router>
      <Route path="/" exact component={Home} />
      <Route path="/home" component={Home} />
      <Route path="/sellpage" component={SellPage} />
      <Route path="/buypage" component={BuyPage} />
      <Route path="/pageonepage" component={PageonePage} />
      <Route path="/contactpage" component={ContactPage} />
      <Route path="/signinpage" component={SigninPage} />
      <Route path="/signuppage" component={SignupPage} />
      <Route path="/signoutpage" component={SignoutPage} />
     
</Router>

    </>
  );
}

export default App;

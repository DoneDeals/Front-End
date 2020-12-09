import React, { Component } from "react";
import "../css/header.css";

export default class Header extends Component {
  render() {
    const titleHeader = this.props.titleHeader;
    return (
      <>
        <div className="bgHeader"></div>
        <h1>{titleHeader}</h1>
      
      </>
    );
  }
}

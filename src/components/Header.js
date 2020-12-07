import React, { Component } from "react";
import "../css/header.css";
import React from "react";
import Header from "./Header";
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
export default (Header);
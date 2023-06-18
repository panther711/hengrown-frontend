import React from "react";
import { Navbar } from "react-bootstrap";
import "./index.css";

class Header extends React.Component {
  render() {
    return (
      <Navbar
        fixed="top"
        expand="lg"
        className="hengrown-main-header"
      ></Navbar>
    );
  }
}

export default Header;

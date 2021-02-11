import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./style-home.scss";
export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { navExpanded: false };
  }
  handleToggle() {
    this.setState({
      navExpanded: !this.state.navExpanded,
    });
  }
  render() {
    return (
      <>
        <Navbar
          sticky="top"
          collapseOnSelect
          expand="lg"
          className="Navbar-top"
          expanded={this.state.navExpanded}
        >
          <Navbar.Brand className="Collapse-1">
            <NavLink to="/">
              <img src="logo.png" alt="" height="40px" width="auto"></img>
            </NavLink>
          </Navbar.Brand>
          <Navbar.Toggle
            className="Collapse-1"
            onClick={() => this.handleToggle()}
          />
          <Navbar.Collapse>
            <Nav className="mr-auto"></Nav>
            <Nav className="Nav-icon ">
              <NavLink to="/" onClick={() => this.handleToggle()}>
                หน้าหลัก
              </NavLink>
              <NavLink to="/printdesign" onClick={() => this.handleToggle()}>
                ออกแบบสื่อสิ่งพิมพ์
              </NavLink>
              <NavLink to="/webdesign" onClick={() => this.handleToggle()}>
                ออกแบบเว็บไซต์
              </NavLink>
              <NavLink to="/about" onClick={() => this.handleToggle()}>
                เกี่ยวกับเรา
              </NavLink>
              <NavLink to="/contact" onClick={() => this.handleToggle()}>
                ติดต่อเรา
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>
    );
  }
}
// export default Header;

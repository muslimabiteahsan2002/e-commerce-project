import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav,Container,Navbar,NavLink} from 'react-bootstrap';
import '../mycssfolter/MyCSSSttyle.css'
import logo from "../../asset/Logo.png"

class Navigationbar extends Component {
  render() {
    return (
      <>         
          <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/"><img src={logo}/></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav>
                <NavLink href="/" className="na">Welcome to TonerShopBD</NavLink>
                <NavLink href="/laser" className="na">Laser Printer Toner</NavLink>
                <NavLink href="/inkJet" className="na">DeskJet/InkJet Printer Cartridge</NavLink>
                <NavLink href="/dot" className="na">Dot Printer Ribbon</NavLink>
                <NavLink href="/photocopy" className="na">Photocopy Toner</NavLink>
                <NavLink href="/information" className="na">আমাদের কথা</NavLink>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
  }
}

export default Navigationbar;

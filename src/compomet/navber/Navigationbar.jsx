import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav,Container,Navbar} from 'react-bootstrap';
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
                <Nav.Link href="/" className="na">Welcome to TonerShopBD</Nav.Link>
                <Nav.Link href="/laser" className="na">Laser Printer Toner</Nav.Link>
                <Nav.Link href="/inkJet" className="na">DeskJet/InkJet Printer Cartridge</Nav.Link>
                <Nav.Link href="/dot" className="na">Dot Printer Ribbon</Nav.Link>
                <Nav.Link href="/photocopy" className="na">Photocopy Toner</Nav.Link>
                <Nav.Link href="/information" className="na">আমাদের কথা</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
  }
}

export default Navigationbar;

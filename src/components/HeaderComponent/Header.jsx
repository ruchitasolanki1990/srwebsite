import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { COMPANY_NAME } from "../../constant/Constant";
import { SECONDARY_COLOR } from "../../constant/theme";
import { PRAIMARY_COLOR } from "../../constant/theme";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import About from "../../pages/About";
import Contact from "../../pages/Contact";
import Home from "../../pages/Home";
import { NavLink } from "react-router-dom";

const Header = () => {
    return(
        <>
   
  <div className="text-primary_font mx-3">
    <Navbar expand="lg">
      <Container fluid>
        <Navbar.Brand href="/" className="col-8">
        <img src="/images/logo.png" width={'10%'}></img>
        <span className="text-primary_color fw-bolder fs-6 fs-md-4 fs-lg-2">{"  "+ COMPANY_NAME}</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto me-0">
            <Nav.Link href="/"  className="text-primary_color" >Home</Nav.Link>
            <Nav.Link href="/about" className="text-primary_color">About</Nav.Link>
            <Nav.Link href="/product" className="text-primary_color"  >Product</Nav.Link>
            <Nav.Link href="/contact" className="text-primary_color" >Contact</Nav.Link>
            </Nav>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
        </>
    )
}
export default Header
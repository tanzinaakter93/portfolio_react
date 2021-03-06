import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const MyNavbar = () => {
    return (
        <>
            <Navbar fixed="top" collapseOnSelect expand="md" bg="dark" variant="dark" className="animate-navbar nav-theme justify-content-between">
  <Navbar.Brand href="#home">Tanzina Akter</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mx-auto">
      <Nav.Link href="#aboutme">Home</Nav.Link>
      <Nav.Link href="#skills">Tech Skills</Nav.Link>
      <Nav.Link href="#projectspro">Projects</Nav.Link>
      <Nav.Link href="#experience">Experience</Nav.Link>
      <Nav.Link href="#education">Education</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
        </>
    )
}

export default MyNavbar

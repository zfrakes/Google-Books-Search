import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

function Header() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/">Book Search</Navbar.Brand>
          <Nav className="mr-auto">
              <Nav.Link href="/search">Search</Nav.Link>
              <Nav.Link href="/saved">Saved</Nav.Link>
          </Nav>
      </Navbar>
      <section class="jumbotron text-center" style={{ backgroundColor: 'white'}}>
        <div class="container">
          <h1 class="jumbotron-heading">(React) Google Books Search</h1>
          <p class="lead text-muted">Search for and Save books of interest</p>
        </div>
      </section>
      </>
  );
}

export default Header;

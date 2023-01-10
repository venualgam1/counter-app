import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import React from "react";

export default function NavBar() {
  return (
    <>
      <Navbar className="nav--bar" bg="primary" variant="dark">
        <Container>
          <Navbar.Brand>
            <Link className="nav--link" to="/">
              News App
            </Link>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Link className="nav--link" to="home">
              Home
            </Link>
            <Link className="nav--link" to="trending">
              Trending
            </Link>
            <Link className="nav--link" to="health">
              Health
            </Link>
            <Link className="nav--link" to="tech">
              Tech
            </Link>
            <Link className="nav--link" to="newArticle">
              Add New Article
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

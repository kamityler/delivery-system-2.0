import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Nav.css';

function NavBar() {
  return (
    <Navbar expand="lg" className="navbar-bg" sticky="top" >
      <Container>
        <Navbar.Brand className="label nav-brand" href="/">Delivery System</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="nav-link" href="/couriers">Couriers</Nav.Link>
            <Nav.Link className="nav-link" href="/map">Map</Nav.Link>
            <Nav.Link className="nav-link" href="/deliveries">Deliveries</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
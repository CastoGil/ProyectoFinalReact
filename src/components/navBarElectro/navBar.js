import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import CartWidget from './CartWidget';
import { NavLink } from 'react-router-dom'
import './navBar.css'
function NavBarElectro() {
  return (
    <>
      {[false].map((expand) => (
        <Navbar key={expand} bg="warning" variant="dark" expand={expand} className="">
          <Container fluid>
            <NavLink className="logo" to='/'><img className="imglogo" src="https://images.pexels.com/photos/264547/pexels-photo-264547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>ELECTROLIBRE</NavLink>
            
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas 
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  ElectroLibre
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
              <Nav  className="justify-content-end flex-grow-1 pe-3">
                  <NavLink to='/'>Inicio</NavLink>
                  
                  <NavDropdown
                    title="Productos"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavLink to='/'>Lista de Productos</NavLink> <NavDropdown.Divider />
                    <NavLink to='/category/celulares-tablet'>Celulares/Tablet</NavLink> <NavDropdown.Divider />
                    <NavLink to='/category/camaras-drones'>Camaras/Drones</NavLink> <NavDropdown.Divider />
                    <NavLink to='/category/computadoras-lapto'>Computadoras/Lapto</NavLink> <NavDropdown.Divider />
                  </NavDropdown>
                  <Nav.Link href="#">Nosotros</Nav.Link>
                  <Nav.Link href="#">Contacto</Nav.Link>
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Buscador"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Buscador</Button>
                </Form><br></br>
                <NavLink to='/cart'>
                <CartWidget></CartWidget>
                </NavLink>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}


export default NavBarElectro;

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import CartWidget from './CartWidget';
import { NavLink } from 'react-router-dom';
import './navBar.css';

function NavBarElectro() {
  return (
    <Navbar expand='lg' className='navbar-elegant' sticky='top'>
      <Container fluid>
        <NavLink className='logo' to='/'>
          <img
            className='imglogo'
            src='https://images.pexels.com/photos/264547/pexels-photo-264547.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1'
            alt='Logo ElectroLibre'
          />
          ELECTROLIBRE
        </NavLink>

        <Navbar.Toggle aria-controls='offcanvasNavbar' />
        <Navbar.Offcanvas id='offcanvasNavbar' aria-labelledby='offcanvasNavbarLabel' placement='end'>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id='offcanvasNavbarLabel'>ElectroLibre</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className='menu-links justify-content-end flex-grow-1'>
              <NavLink to='/'>Inicio</NavLink>

              <NavDropdown title='Productos' id='products-dropdown'>
                <NavLink className='dropdown-link' to='/'>Lista de Productos</NavLink>
                <NavDropdown.Divider />
                <NavLink className='dropdown-link' to='/category/celulares-tablet'>Celulares/Tablet</NavLink>
                <NavDropdown.Divider />
                <NavLink className='dropdown-link' to='/category/camaras-drones'>Cámaras/Drones</NavLink>
                <NavDropdown.Divider />
                <NavLink className='dropdown-link' to='/category/computadoras-lapto'>Computadoras/Laptop</NavLink>
              </NavDropdown>

              <NavLink to='/nosotros'>Nosotros</NavLink>
              <NavLink to='/contacto'>Contacto</NavLink>
            </Nav>

            <Form className='search-box d-flex' role='search'>
              <Form.Control
                type='search'
                placeholder='Buscar próximamente'
                className='me-2'
                aria-label='Search'
                disabled
              />
              <Button variant='primary' disabled>
                Buscar
              </Button>
            </Form>

            <NavLink to='/cart'>
              <CartWidget />
            </NavLink>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default NavBarElectro;

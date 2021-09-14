import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom';


function Header() {
    return (
        <header>
            <Navbar style={{backgroundColor: '#272727'}} expand="lg">
                <Container>
                    <Navbar.Brand style={{ color:'#ff652f'}} as={Link} to="/">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link style={{ color:'#ff652f'}} as={Link} to="/">Home</Nav.Link>
                            <Nav.Link style={{ color:'#ff652f'}} as={Link} to="/about">About</Nav.Link>
                            <Nav.Link style={{ color:'#ff652f'}} as={Link} to="/resume">Resume</Nav.Link>
                            <Nav.Link style={{ color:'#ff652f'}} as={Link} to="/contact">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header
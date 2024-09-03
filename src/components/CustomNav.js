import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Images from '../components/Images';
// const image = 'https://trydo.rainbowit.net/assets/images/logo/logo-symbol-dark.png'
import logoImage from "../assets/images/logo_image.png";
import SearchBar from './SearchBar';

function CustomNav() {
    return (
        <>
            <Navbar expand="lg" className="bg-black navbar py-3">
                <Container fluid>
                    <Navbar.Brand href="#">
                        <Images style="w-75" links={logoImage} />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link   href="/">Home</Nav.Link>
                            <Nav.Link   href="/About">About</Nav.Link>
                            <Nav.Link   href="/Service">Service</Nav.Link>
                            <Nav.Link   href="/Portfolio">Portpolio</Nav.Link>
                            <Nav.Link   href="/Blog">Blog</Nav.Link>
                            <Nav.Link   href="/Contact">Contact</Nav.Link>
                        </Nav>

                            <SearchBar />
                        <Form className="d-flex">
                            {/* <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            /> */}
                            <Button variant="outline-secondary nav_btn_hover">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default CustomNav
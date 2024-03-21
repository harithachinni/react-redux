import React from "react";
import { Col, Container, Row } from "react-bootstrap";
// import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaHome, FaBootstrap, FaLink } from 'react-icons/fa'
import { MdArrowDropDownCircle } from 'react-icons/md'
function Home() {

    return (
        <>
            <Container>



                <Navbar expand="lg" className="bg-body-tertiary">
                    <Container>
                        <Navbar.Brand href="#home"><FaBootstrap size={30} />React-Bootstrap</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="#home">
                                    <FaHome size={30} />Home</Nav.Link>
                                <Nav.Link href="#link"><FaLink size={30} />Link</Nav.Link>
                                <NavDropdown title={<MdArrowDropDownCircle />}>
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">
                                        Another action
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">
                                        Separated link
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

            </Container>
        </>
    )
}
export default Home;
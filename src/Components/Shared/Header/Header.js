import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const {user, logout} = useAuth();
    return (
        <div>
            <Navbar bg="primary" variant="dark" sticky='top' collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to="/">Royal Tour</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={HashLink} to="/home#plans">Tour Plans</Nav.Link>
                    <Nav.Link as={HashLink} to="/home#testimonial">Testimonial</Nav.Link>
                    <Nav.Link as={Link} to="/add-new-plan">Add New Plan</Nav.Link>
                    {/* <Nav.Link as={Link} to="/login">Login</Nav.Link> */}
                    <Navbar.Text>
                        &nbsp;&nbsp;<a href="#login">{user?.displayName}</a>
                    </Navbar.Text>
                    &nbsp;&nbsp;
                    { user?.email ? 
                        <button onClick={logout} className="btn btn-light">Logout</button> :
                        <Nav.Link as={Link} to="/login">Login</Nav.Link>}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
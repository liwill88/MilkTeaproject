import React from 'react'
import { Link } from 'react-router-dom';
import '/Users/will8088/Desktop/MERN_Project/client/src/App.css'
import { Navbar, Container, Nav } from 'react-bootstrap'


const NavbarTop = () => {
    return (
        <Container>
            <Navbar className="navbar navbar-expand-lg navbar-light bg-light" >
                <h3 className="m-3">Milktea Base</h3>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/milktea/new">Create</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/signup">Register</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Log in</Link>
                        </li>
                    </ul>
                </div>
            </Navbar>
        </Container>
    )
}

export default NavbarTop



import React from 'react';
import {Link} from 'react-router-dom'
import {Navbar,Nav} from 'react-bootstrap'
import '../styles/footer.css'
function NavBar(){
    return(
        <div>
            <Navbar 
            bg="dark"
            variant="dark"
            sticky='top'>
            {/* <NavBar className="NavBar"> */}
            <Navbar.Brand href="/">Press-solution</Navbar.Brand>
            {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                    <Link to='/vte'><Nav.Link href="/vte">VTE</Nav.Link></Link>
                    <Link to='/vtm'><Nav.Link href="/vtm">VTM</Nav.Link></Link>
                    <Link to='/contact'><Nav.Link href="/contact">Contact</Nav.Link></Link>
            </Nav>
            </Navbar.Collapse>
            </Navbar>
        </div>
    )
}
export default NavBar;
import React from 'react';
import {Link} from 'react-router-dom'
import {Navbar,Nav,NavDropdown,Image} from 'react-bootstrap'
function VTENav (){
    return(
    <header>
        {/* <Link to='/vte'>VTE </Link> */}
        {/* <Link to='/vte/services'>Services </Link> */}
        {/* <Link to='/vte/about'>About </Link> */}
        {/* <Link to='/vte/clients'>Clients </Link> */}

<Navbar bg="light" variant="light">
    
    <Link to='/vte'><Navbar.Brand href="/vte"><Image fluid src='/images/vte/logo-vts-logo_vts.png' alt='vte-enter'/></Navbar.Brand></Link>
    {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav"> */}
    <Nav className="mr-auto">
    <Link to='/vte/about'><Nav.Link href="/vte/about">About</Nav.Link> </Link>
      
      <NavDropdown title="Services" id="nav-dropdown">
          
          <NavDropdown.Item ><Link to='/vte/services/installation'>Installation </Link></NavDropdown.Item>
          <NavDropdown.Item ><Link to='/vte/services/repair'>Repair </Link></NavDropdown.Item>
          <NavDropdown.Item ><Link to='/vte/services/maintainance'>Maintainance </Link></NavDropdown.Item>
          {/* <NavDropdown.Item eventKey="4.2"><Link to='/vte/services/consultant'>Consultant</Link></NavDropdown.Item> */}
          {/* <NavDropdown.Divider />
          <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item> */}
        </NavDropdown>
        <Link to='/vte/clients'><Nav.Link href="/vte/clients">Clients</Nav.Link> </Link>
      
    </Nav>
    {/* </Navbar.Collapse> */}
</Navbar>
    </header>
    )
}
export default VTENav;
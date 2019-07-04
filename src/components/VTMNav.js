import React from 'react';
import {Link} from 'react-router-dom'
import {Navbar,Nav, Image} from 'react-bootstrap'
const VTMNav = ()=>(
    <div>
        {/* <Link to='/vtm'>VTM </Link>
        <Link to='/vtm/why_us'>Why us </Link>
        <Link to='/vtm/products'>Products</Link> */}
        <Navbar bg="light" variant="light">
    <Navbar.Brand href="/vtm"><Image fluid src='/images/vtm/logo_vtm.png' alt='vtm Logo' /></Navbar.Brand>
    <Nav className="mr-auto">
    <Link to='/vtm/why_us'><Nav.Link href="/vtm/why_us">Why "xuduan"</Nav.Link> </Link>
    <Link to='/vtm/products'><Nav.Link href="/vtm/products">Products</Nav.Link></Link>
      
    </Nav>
  </Navbar>
    </div>
)
export default VTMNav;
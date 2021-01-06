import React from 'react'

import {
  Link
} from 'react-router-dom'

import {
  Navbar as Nvbr,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap'

const Navbar = () => {

  return (
    <>
      <Nvbr color="light" light expand="md">
        <NavbarBrand href="/">Greg Samuelson</NavbarBrand>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink>
              <Link to="/">Home</Link>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink>
              <Link to="/Contact">Contact</Link>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink>
              <Link to="/Portfolio">Portfolio</Link>
            </NavLink>
          </NavItem>
        </Nav>
      </Nvbr>
    </>
  )
}

export default Navbar
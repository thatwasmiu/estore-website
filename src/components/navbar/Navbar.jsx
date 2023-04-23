import { Button, Container, Nav, NavDropdown, Navbar as NavbarBs } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import { useShoppingCart } from "../../context/ShoppingCartContext"
import { useState } from "react"
import NavDropdownMenu from "../nav-dropdown/NavDropdown.component"

export function Navbar() {
  // const { openCart, cartQuantity } = useShoppingCart()
  const [expanded, setExpanded] = useState(false)

    const setToggle = () => {
        console.log('toggle');
        setExpanded(true)
    }
  return (
    <NavbarBs sticky="top" className="bg-white shadow-sm mb-3" onToggle={setToggle}>
      <Container>
      
        <Nav className="me-auto">
          <Nav.Link to="/" as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to="/store" as={NavLink}>
            Store
          </Nav.Link>
          <Nav.Link to="/about" as={NavLink}>
            About
          </Nav.Link>
        </Nav>
    
        <NavDropdownMenu expanded={expanded} />

      </Container>
    </NavbarBs>
  )
}



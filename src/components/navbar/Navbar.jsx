import { Button, Container, Nav, NavDropdown, Navbar as NavbarBs } from "react-bootstrap"
import { NavLink, Outlet } from "react-router-dom"
import { useShoppingCart } from "../../context/ShoppingCartContext"
import { useContext, useState } from "react"
import NavDropdownMenu from "../nav-dropdown/NavDropdown.component"
import CartButton from "../cart-button/CartButton"
import { UserLoginContext } from "../../context/UserLoginContext"

export function Navbar() {
  // const { openCart, cartQuantity } = useShoppingCart()
  const [expanded, setExpanded] = useState(false);
  const { authUser } = useContext(UserLoginContext);
  
    const setToggle = () => {
        console.log('toggle');
        setExpanded(true)
    }
    
    if (authUser.user === null) {
      const url = "/login";
      window.location.replace(url);
      return;
    }
    
  return (
  <>
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
    <CartButton />
    <Outlet />
  </>
  )
}



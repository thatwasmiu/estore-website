import { Button, Container, Nav, NavDropdown, Navbar as NavbarBs } from "react-bootstrap"
import { NavLink, Outlet } from "react-router-dom"
import { useShoppingCart } from "../../context/ShoppingCartContext"
import { useContext, useEffect, useState } from "react"
import NavDropdownMenu from "../nav-dropdown/NavDropdown.component"
import CartButton from "../cart-button/CartButton"
import { UserLoginContext } from "../../context/UserLoginContext"
import { useAppDataContext } from "../../context/AppDataContext"

export function Navbar() {
  const [expanded, setExpanded] = useState(false);
  const { authUser } = useContext(UserLoginContext);
  const { setProductContext, setCategoryContext, setVoucherContext } = useAppDataContext();

  useEffect(() => {
      fetch('products.json')
      .then((res) => res.json())
      .then((d) => {
        setProductContext(d);
      });

      fetch('category.json')
      .then((res) => res.json())
      .then((d) => {
        setCategoryContext(d);
      });

      fetch('vouchers.json')
      .then((res) => res.json())
      .then((d) => {
      setVoucherContext(d);
  }, [])
  
  }, []) 
  
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
          <Nav.Link to="/order" as={NavLink} className="text-info">
          Your Orders
          </Nav.Link>
        </Nav>
        <NavDropdownMenu/>

      </Container>
    </NavbarBs>
    <CartButton />
    <Outlet />
  </>
  )
}



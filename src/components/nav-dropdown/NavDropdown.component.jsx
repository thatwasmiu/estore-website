import { Button, Container, Nav, NavDropdown, Navbar} from "react-bootstrap"
import "./NavDropdownMenu.style.css";
import { useContext } from "react";
import { UserLoginContext } from "../../context/UserLoginContext";

const NavDropdownMenu = (expanded) => {

    const { logout } = useContext(UserLoginContext);
    
    return (
            <>
                <div className="nav-dropdown-menu">
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto">
                            {expanded && <NavDropdown className="dropdown-menu-cust">
                                <NavDropdown.Item>Profile</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item onClick={logout}>Log out</NavDropdown.Item>
                            </NavDropdown>}
                        </Nav>
                        <i className="fa-solid fa-user"></i>
                        
                    </Navbar.Collapse>    
                </div> 
            </>
    )
}

export default NavDropdownMenu;
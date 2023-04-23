import { Button, Container, Nav, NavDropdown, Navbar} from "react-bootstrap"
import "./NavDropdownMenu.style.css";

const NavDropdownMenu = (expanded) => {
    
    return (
            <>
                <div className="nav-dropdown-menu">
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto">
                            {expanded && <NavDropdown className="dropdown-menu-cust">
                                <NavDropdown.Item>Profile</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>Log out</NavDropdown.Item>
                            </NavDropdown>}
                        </Nav>
                        <i className="fa-solid fa-user"></i>
                        
                    </Navbar.Collapse>    
                </div> 
            </>
    )
}

export default NavDropdownMenu;
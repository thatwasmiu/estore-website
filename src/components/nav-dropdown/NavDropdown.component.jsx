import { Button, Container, Nav, NavDropdown, Navbar} from "react-bootstrap"
import "./NavDropdownMenu.style.css";
import { useContext } from "react";
import { UserLoginContext } from "../../context/UserLoginContext";

const NavDropdownMenu = (expanded) => {

    const { authUser, logout } = useContext(UserLoginContext);
    const username = authUser.user.username;
    return (
            <>
                
                {/* <div className="nav-dropdown-menu"> */}
                <NavDropdown  drop="start">
                    
                        <NavDropdown.Item>
                            {username.toUpperCase()}
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item onClick={logout}>Log out</NavDropdown.Item>   
                </NavDropdown> 
                <i className="fa-solid fa-user" htmlFor="dropdown-button-drop-start"></i>   
                
            </>
    )
}

export default NavDropdownMenu;
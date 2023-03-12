import {NavLink, Outlet} from "react-router-dom";
import './menu.css';

const NavBar = () => {
    return <>
        <nav className="navigation-bar">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/test">Test</NavLink>
        </nav>
        <Outlet />
    </>
}

export default NavBar;
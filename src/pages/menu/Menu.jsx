import {NavLink, Outlet} from "react-router-dom";
import './menu.css';

const Menu = () => {
    return <>
        <nav className="navigation-bar">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/login">Login</NavLink>
        </nav>
        {/*<Outlet />*/}
    </>
}

export default Menu;
import { NavLink } from "react-router-dom";
import './menu.css';

const Menu = () => {
    return <nav id="menu">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/placeholder">Some Page</NavLink>
    </nav>
}

export default Menu;
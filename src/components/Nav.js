import "./style.css"
import { NavLink } from "react-router-dom";

const Nav = () => {
    const activeItem = 'active';
    const notActiveItem = 'notActive';

    return (
        <>
            <div className="navField">
                <NavLink to="/" className={({ isActive }) => isActive ? activeItem : notActiveItem}>
                    SIGN IN 
                </NavLink>
                <NavLink to="/SignUP" className={({ isActive }) => isActive ? activeItem : notActiveItem}>
                    SIGN UP 
                </NavLink>
                
            </div>
        </>
    )
}

export default Nav;
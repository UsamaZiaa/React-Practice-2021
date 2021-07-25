import { NavLink } from "react-router-dom";

const Navbar = () => {
    return(
        <div className='navbar'>
            {/* <Link to="/">Home</Link> */}
            <NavLink exact activeClassName='active_link' to="/">Home</NavLink>
            <NavLink exact activeClassName='active_link' to="/about">About</NavLink>
            <NavLink exact activeClassName='active_link' to="/contact">Contact</NavLink>
            <NavLink exact activeClassName='active_link' to="/search">Search</NavLink>
        </div>
    )
}

export default Navbar
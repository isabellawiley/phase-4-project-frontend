import { NavLink } from "react-router-dom";

function NavBar({logout}){

    return(
        <div>
            <nav>
                <button onClick={logout} >Logout</button>
                {/* <NavLink to={'/nerd/:id'} >Profile</NavLink> */}
                {/* <NavLink ></NavLink>
                <NavLink ></NavLink> */}
            </nav>
        </div>
    )
}

export default NavBar;
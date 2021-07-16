import { useHistory } from "react-router"
import NavBar from "./NavBar";


function Header({logout}){
    const history = useHistory();

    function handleClick(){
        history.push('/');
    }

    return(
        <div>
            <header>
            <img className="logo" onClick={handleClick} src="https://see.fontimg.com/api/renderfont4/Dj83/eyJyIjoiZnMiLCJoIjoxNzQsInciOjMwMDAsImZzIjo1OCwiZmdjIjoiI0ZGRkZGRiIsImJnYyI6IiNGRjExMTEifQ/TUFSVkVMR08/marvel-regular.png" alt="Marvel fonts"/>
            <NavBar logout={logout} />
            </header>
        </div>
    )
}

export default Header;
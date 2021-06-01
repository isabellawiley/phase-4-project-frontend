import { useHistory } from "react-router"
import NavBar from "./NavBar";


function Header(){
    const history = useHistory();

    function handleClick(){
        history.push('/');
    }

    return(
        <div>
            <h1 onClick={handleClick} >Marvel-Go</h1>
            <NavBar />
        </div>
    )
}

export default Header;
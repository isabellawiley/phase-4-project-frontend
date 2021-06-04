import { useHistory } from "react-router";
import { Link } from "react-router-dom";


function Login({setCurrentNerd}){
    const history = useHistory();

    const handleLogin = (e) => {
        e.preventDefault();

        fetch(`http://localhost:3000/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: e.target[0].value,
                password: e.target[1].value
            })
        })
        .then(res => res.json())
        .then((nerdInfo) => {
            console.log(nerdInfo)
            setCurrentNerd(nerdInfo)
            localStorage.setItem("loggedNerd", JSON.stringify(nerdInfo));
            console.log(localStorage.getItem("loggedNerd"))
            history.push("/")
        })
    }

    return(
        <div>
            <h2>Login</h2>
            <h2>Not a nerd yet? <Link to="/signup" >Sign up!</Link> </h2>
            <form onSubmit={(e) => handleLogin(e)} >
                <label>Username</label>
                <input name="username" type="text" />
                <label>Password</label>
                <input name="password" type="password" />
                <input type="submit" />
            </form>
        </div>
    )
}

export default Login;
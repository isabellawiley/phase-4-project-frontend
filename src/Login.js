import { useHistory } from "react-router";


function Login({setCurrentNerdId}){
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
            localStorage.token = nerdInfo.token
            setCurrentNerdId(nerdInfo.id)
            history.push("/")
        })
    }

    return(
        <div>
            <h2>Login</h2>
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
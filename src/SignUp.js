import { useHistory } from "react-router";
import { Link } from "react-router-dom";


function SignUp({setCurrentNerd}){
    const history = useHistory();

    const handleSignUp = (e) => {
        e.preventDefault();

        fetch(`http://localhost:3000/nerds`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: e.target[0].value,
                age: e.target[1].value,
                state: e.target[2].value,
                username: e.target[3].value,
                password: e.target[4].value
            })
        })
        .then(res => res.json())
        .then((nerdInfo) => {
            console.log(nerdInfo)
            setCurrentNerd(nerdInfo)
            localStorage.setItem("loggedNerd", JSON.stringify(nerdInfo));
            history.push("/")
        })
    }

    return(
        <div>
            <h2>SignUp</h2>
            <h2>Already a nerd? <Link to="/login" >Login!</Link> </h2>
            <form onSubmit={(e) => handleSignUp(e)} >
                <label>Name</label>
                <input name="name" type="text" />
                <label>Age</label>
                <input name="age" type="text" />
                <label>State</label>
                <input name="state" type="text" />
                <label>Username</label>
                <input name="username" type="text" />
                <label>Password</label>
                <input name="password" type="password" />
                <input type="submit" />
            </form>
        </div>
    )
}

export default SignUp;
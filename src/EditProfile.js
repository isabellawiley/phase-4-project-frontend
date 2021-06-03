import { useState } from "react";
import { Button, Modal } from "semantic-ui-react";

function EditProfile({currentNerd}){
    const [open, setOpen] = useState(false);
    const [name, setName] = useState("");
    const [age, setAge] = useState(0);
    const [state, setState] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(e){
        e.preventDefault();

        fetch(`http://localhost:3000/nerds/${currentNerd.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: name,
                age: age,
                state: state,
                username: username,
                password: password
            })
        })
        .then(res => res.json())
        .then(() => {
            setName("");
            setAge(0);
            setState("");
            setUsername("");
            setPassword("");
            setOpen(false);
        })
    }

    return(
        <div>
            <Modal onClose={() => setOpen(false) } onOpen={() => setOpen(true)}
            open={open} trigger={<Button>Edit Profile</Button>} >
                <h2>Edit Profile</h2>
                <Modal.Content>
                    <Modal.Description>
                        <form onSubmit={handleSubmit} >
                            <label for="name" >Name: </label>
                            <input id="name" type="text" value={currentNerd.name} onChange={(e) => setName(e.target.value)} ></input>
                            <label for="age">Age: </label>
                            <input id="age" type="number" value={currentNerd.age} onChange={(e) => setAge(e.target.value)} ></input>
                            <label for="state">State: </label>
                            <input id="state" type="text" value={currentNerd.state} onChange={(e) => setState(e.target.value)} ></input>
                            <label for="username">Userame: </label>
                            <input id="username" type="text" value={currentNerd.username} onChange={(e) => setUsername(e.target.value)} ></input>
                            <label for="password">Password: </label>
                            <input id="password" type="password" value={currentNerd.password} onChange={(e) => setPassword(e.target.value)} ></input>
                            <input type="submit" value="Save Changes"></input>
                        </form>
                    </Modal.Description>
                </Modal.Content>
            </Modal>
        </div>
    )
}

export default EditProfile;
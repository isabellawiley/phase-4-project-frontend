import { useState } from "react";
import { Button, Modal } from "semantic-ui-react";

function EditProfile({currentNerd, setCurrentNerd}){
    const [open, setOpen] = useState(false);
    const [nerdDetails, setNerdDetails] = useState({
        name: currentNerd.name,
        age: currentNerd.age,
        state: currentNerd.state,
        username: currentNerd.username,
        password: currentNerd.password
    })

    function setValue(key, value){
        setNerdDetails({...nerdDetails, [key]: value});
    }

    function handleSubmit(e){
        e.preventDefault();

        fetch(`http://localhost:3000/nerds/${currentNerd.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: nerdDetails.name,
                age: nerdDetails.age,
                state: nerdDetails.state,
                username: nerdDetails.username,
                password: nerdDetails.password
            })
        })
        .then(res => res.json())
        .then((nerd) => {
            setCurrentNerd(nerd);
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
                        <h1>{currentNerd.name}</h1>
                        <form onSubmit={handleSubmit} >
                            <label htmlFor="name" >Name: </label>
                            <input id="name" type="text" value={nerdDetails.name} onChange={(e) => setValue("name", e.target.value)} ></input>
                            <label htmlFor="age">Age: </label>
                            <input id="age" type="number" value={nerdDetails.age} onChange={(e) => setValue("age", e.target.value)} ></input>
                            <label htmlFor="state">State: </label>
                            <input id="state" type="text" value={nerdDetails.state} onChange={(e) => setValue("state", e.target.value)} ></input>
                            <label htmlFor="username">Userame: </label>
                            <input id="username" type="text" value={nerdDetails.username} onChange={(e) => setValue("username", e.target.value)} ></input>
                            <label htmlFor="password">Password: </label>
                            <input id="password" type="password" value={nerdDetails.password} onChange={(e) => setValue("password", e.target.value)} ></input>
                            <input type="submit" value="Save Changes"></input>
                        </form>
                    </Modal.Description>
                </Modal.Content>
            </Modal>
        </div>
    )
}

export default EditProfile;
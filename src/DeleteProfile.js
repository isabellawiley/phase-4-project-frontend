import { useState } from "react";
import { Button, Modal } from "semantic-ui-react";

function DeleteProfile({currentNerd, logout}){
    const [open, setOpen] = useState(false);

    function handleDelete(e){
        e.preventDefault();

        fetch(`http://localhost:3000/nerds/${currentNerd.id}`, {
            method: "DELETE",
        })
        .then(res => res.json())
        .then(() => {
            logout();
        })
    }

    return(
        <div>
            <Modal onClose={() => setOpen(false) } onOpen={() => setOpen(true)}
            open={open} trigger={<Button>Delete Profile</Button>} >
                <h2>Edit Profile</h2>
                <Modal.Content>
                    <Modal.Description>
                        <form onSubmit={handleDelete} >
                            <label>Are you sure you want to delete your account?</label>
                            <input type="submit" value="Yes, I'm sure I no longer want to be the coolest nerd."></input>
                        </form>
                    </Modal.Description>
                </Modal.Content>
            </Modal>
        </div>
    )
}

export default DeleteProfile;
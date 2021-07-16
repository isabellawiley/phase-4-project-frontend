import { useState } from "react";
import { Button, Modal } from 'react-bootstrap';

function DeleteProfile({currentNerd, logout}){
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
            <Button variant='dark' style={{ margin: '10px'}} onClick={handleShow}>Delete Profile</Button>

            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title><h2><strong>Edit Profile</strong></h2></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleDelete} >
                        <label>Are you sure you want to delete your account?</label>
                        <input type="submit" value="Yes, I'm sure I no longer want to be the coolest nerd."></input>
                    </form>
                </Modal.Body>
            </Modal>
            {/* <Modal onClose={() => setOpen(false) } onOpen={() => setOpen(true)}
            open={open} trigger={<Button variant='dark' style={{ margin: '10px'}}>Delete Profile</Button>} >
                <h2>Edit Profile</h2>
                <Modal.Content>
                    <Modal.Description>
                        <form onSubmit={handleDelete} >
                            <label>Are you sure you want to delete your account?</label>
                            <input type="submit" value="Yes, I'm sure I no longer want to be the coolest nerd."></input>
                        </form>
                    </Modal.Description>
                </Modal.Content>
            </Modal> */}
        </div>
    )
}

export default DeleteProfile;
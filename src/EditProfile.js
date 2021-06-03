import { useState } from "react";
import { Button, Modal } from "semantic-ui-react";

function EditProfile({nerd}){
    const [open, setOpen] = useState(false);

    return(
        <div>
            <Modal onClose={() => setOpen(false) } onOpen={() => setOpen(true)}
            open={open} trigger={<Button>Edit Profile</Button>} >
                <h2>Edit Profile</h2>
                <Modal.Content>
                    <Modal.Description>
                        
                    </Modal.Description>
                </Modal.Content>
            </Modal>
        </div>
    )
}

export default EditProfile;
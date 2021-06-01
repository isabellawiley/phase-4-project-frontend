import { useState } from "react";
import {Modal, Image, Button} from "semantic-ui-react"

function AddToFoundList({character}){
    const {name, image} = character;
    const [open, setOpen] = useState(false);

    return(
        <div>
            <Modal onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open} trigger={<Button>Add to Found List</Button>} >
                <h2>{name}</h2>
                <Modal.Content image>
                    <Image size="medium" src={image} wrapped alt={name} />
                    <Modal.Description>
                        <p>Enter address of found character: </p>
                    </Modal.Description>
                </Modal.Content>
            </Modal>
        </div>
    )
}

export default AddToFoundList;
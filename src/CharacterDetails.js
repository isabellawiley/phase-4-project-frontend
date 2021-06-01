import { useState } from "react";
import {Modal, Image, Button} from "semantic-ui-react"

function CharacterDetails({character}){
    const {name, bio, image, point_value, total_finds} = character;
    const [open, setOpen] = useState(false);

    return(
        <div>
            <Modal onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open} trigger={<Button>More Details</Button>} >
                <h2>{name}</h2>
                <Modal.Content image>
                    <Image size="medium" src={image} wrapped alt={name} />
                    <Modal.Description>
                        <p>Biography: {bio}</p>
                        <p>Point Value: {point_value}</p>
                        <p>Total Finds: {total_finds} </p>
                    </Modal.Description>
                </Modal.Content>
            </Modal>
        </div>
    )
}

export default CharacterDetails;
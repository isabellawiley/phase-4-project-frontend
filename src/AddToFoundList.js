import { useState } from "react";
import {Modal, Image, Button} from "semantic-ui-react"

function AddToFoundList({character, currentNerd}){
    const {name, image} = character;
    const [open, setOpen] = useState(false);
    const [address, setAddress] = useState("");

    function handleSubmit(e){
        e.preventDefault();

        let matchedLoc = character.locations.filter((location) => {
            return location.address === address;
        })

        if (matchedLoc.length > 0){
            fetch('http://localhost:3000/finds', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    character_id: character.id,
                    nerd_id: currentNerd.id
                })
            }) 
            .then(res => res.json())
            .then(() => {
                setAddress("");
                setOpen(false);
            })
        }
        else{
            alert(`Sorry, ${name} is not in that location :(`);
            setOpen(false);
        }

    }

    return(
        <div>
            <Modal onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open} trigger={<Button>Add to Found List</Button>} >
                <h2>{name}</h2>
                <Modal.Content image>
                    <Image size="medium" src={image} wrapped alt={name} />
                    <Modal.Description>
                        <form onSubmit={handleSubmit} >
                            <label>Enter address of found character: </label>
                            <input id="address" type="text" onChange={(e) => setAddress(e.target.value)} ></input>
                            <input type="submit" value="Submit Address" ></input>
                        </form>
                    </Modal.Description>
                </Modal.Content>
            </Modal>
        </div>
    )
}

export default AddToFoundList;
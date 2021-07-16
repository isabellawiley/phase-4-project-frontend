import { useState } from "react";
// import {Modal, Image, Button} from "semantic-ui-react"
import { Button, Col, Image, Modal, Row } from "react-bootstrap";

function AddToFoundList({character, currentNerd, locations}){
    const {name, image} = character;
    // const [open, setOpen] = useState(false);
    // const [address, setAddress] = useState("");
    const [selected, setSelected] = useState("");
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    let options = locations.map((loc) => {
        return <option value={loc.address}>{loc.address}</option>
    })

    function handleSubmit(e){
        e.preventDefault();
        console.log(e.target.value)

        let matchedLoc = character.locations.filter((location) => {
            return location.address === selected;
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
                alert(`Nice job! You found ${name} :)`);
                setSelected("");
                setShow(false);
            })
        }
        else{
            alert(`Sorry, ${name} is not in that location :(`);
            setSelected("");
            setShow(false);
        }
    }

    return(
        <div>
            <Button variant='secondary' onClick={handleShow}><h5>Add to Found List</h5></Button>

            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title><h2><strong>{name}</strong></h2></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col>
                            <Image src={image} alt={name} thumbnail />
                        </Col>
                        <Col>
                            <form onSubmit={handleSubmit} >
                                <label for="locations">Enter address of found character: </label>
                                <select name="locations" id="locations" onChange={(e) => setSelected(e.target.value)}>
                                    {options}
                                </select>
                                <input type="submit" value="Submit Address" ></input>
                            </form>
                        </Col>
                    </Row>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default AddToFoundList;
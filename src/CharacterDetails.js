import { useState } from "react";
// import {Modal, Image} from "semantic-ui-react";
import { Button, Col, Image, Modal, Row } from "react-bootstrap";

function CharacterDetails({character}){
    const {name, bio, image, point_value, total_finds} = character;
    // const [open, setOpen] = useState(false);
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  

    return(
        <div>
            <Button variant='secondary' style={{ marginBottom: '10px'}} onClick={handleShow}><h5>More Details</h5></Button>

            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title><h2><strong>{name}</strong></h2></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                      <Col>
                        <Image src={image} thumbnail />
                      </Col>
                      <Col>
                        <strong>Biography</strong>
                        <p>{bio}</p>
                        <p><strong class='bold_p'>Point Value: </strong>{point_value}</p>
                        <p><strong>Total Finds: </strong>{total_finds}</p>
                      </Col>
                    </Row>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default CharacterDetails;
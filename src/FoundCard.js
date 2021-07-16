import { Card } from "react-bootstrap";

function FoundCard({character}){
    const {name, image, point_value} = character;

    return(
        <div>
            {/* <img alt={name} src={image} className="character-pic" />
            <h2>{name}</h2>
            <h3>Point Value: {point_value}</h3> */}

            <Card bg='dark' className="text-center" style={{ width: '18rem', height: '20rem', flex: 1, margin: '5px' }}>
                <Card.Img variant='top' src={image} alt={name} className="character-pic" />
                <Card.Body>
                    <Card.Title as='h2'>{name}</Card.Title>
                    <h3>Point Value: {point_value}</h3>
                </Card.Body>
            </Card>
        </div>
    )
}

export default FoundCard;
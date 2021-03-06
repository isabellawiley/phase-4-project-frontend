import { Button, Card } from "react-bootstrap";
import AddToFoundList from "./AddToFoundList";
import CharacterDetails from "./CharacterDetails";

function CharacterCard({character, currentNerd, locations}){
    const {name, image} = character;
    const found = currentNerd.characters.find(char => char.id == character.id);
    console.log(found)

    return(
        <div>
            <Card bg='dark' className="text-center" style={{ width: '18rem', height: '25rem', flex: 1, margin: '5px' }}>
                <Card.Img variant='top' src={image} alt={name} className="character-pic" />
                <Card.Body>
                    <Card.Title as='h2'>{name}</Card.Title>
                    <CharacterDetails character={character} />
                    { found ? 
                        <Button variant="secondary" disabled><h5>Found</h5></Button>
                    :
                        <AddToFoundList character={character} currentNerd={currentNerd} locations={locations} />
                    }
                </Card.Body>
            </Card>
        </div>
    );
}

export default CharacterCard;
import AddToFoundList from "./AddToFoundList";
import CharacterDetails from "./CharacterDetails";

function CharacterCard({character}){
    const {name, image} = character;

    return(
        <div className='card' >
            <img alt={name} src={image} />
            <h3>{name}</h3>
            <CharacterDetails character={character} />
            <AddToFoundList character={character} />
        </div>
    );
}

export default CharacterCard;
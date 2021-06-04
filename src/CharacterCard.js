import AddToFoundList from "./AddToFoundList";
import CharacterDetails from "./CharacterDetails";

function CharacterCard({character, currentNerd, locations}){
    const {name, image} = character;

    return(
        <div className='card' >
            <img alt={name} src={image} className="character-pic" />
            <h2>{name}</h2>
            <CharacterDetails character={character} />
            <AddToFoundList character={character} currentNerd={currentNerd} locations={locations} />
        </div>
    );
}

export default CharacterCard;
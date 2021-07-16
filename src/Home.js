import { CardDeck } from "react-bootstrap";
import CharacterCard from "./CharacterCard";

function Home({characters, currentNerd, locations}){
    
    let charactersList = characters.map((character) => {
        return <CharacterCard key={character.id} character={character} currentNerd={currentNerd} locations={locations} />
    })

    return(
        <div className="center">
            <h1>Marvel Characters List</h1>
            <div>
                <CardDeck className="cardContainer" >
                    {charactersList}
                </CardDeck>
            </div>
        </div>
    );
}

export default Home;
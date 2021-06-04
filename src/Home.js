import { Link } from "react-router-dom";
import CharacterCard from "./CharacterCard";

function Home({characters, currentNerd, locations}){
    
    let charactersList = characters.map((character) => {
        return <CharacterCard key={character.id} character={character} currentNerd={currentNerd} locations={locations} />
    })

    return(
        <div>
            <Link to='/profile' >My Nerd Profile</Link>
            <h2>Marvel Characters List</h2>
            {charactersList}
        </div>
    );
}

export default Home;
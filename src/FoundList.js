import { CardDeck } from "react-bootstrap";
import FoundCard from "./FoundCard";


function FoundList({characters}){
    console.log(characters)
    let charactersList = characters.map((character) => {
        return <FoundCard key={character.id} character={character} />
    })

    // function makeList(){
    //     let charactersList = characters.map((character) => {
    //         return <FoundCard key={character.id} character={character} />
    //     })
    //     console.log(charactersList)
    //     return(charactersList)
    // }

    return(
        <div className="center">
            <h1>Found Characters List</h1>
            <CardDeck>
                {charactersList}
            </CardDeck>
            {/* {characters ? 
             makeList :
             <h2>You have no characters yet :(</h2> } */}
        </div>
    )
}

export default FoundList;
import FoundCard from "./FoundCard";


function FoundList({characters}){
    console.log(characters)
    let charactersList = characters.map((character) => {
        return <FoundCard key={character.id} character={character} />
    })

    return(
        <div>
            <h1>Found Characters List</h1>
            {charactersList}
        </div>
    )
}

export default FoundList;
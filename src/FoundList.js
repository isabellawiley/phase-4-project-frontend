

function FoundList({characters}){
    let charactersList = characters.map((character) => {
        return <h2>{character.name}</h2>
    })

    return(
        <div>
            <h1>Found Characters List</h1>
            {charactersList}
        </div>
    )
}

export default FoundList;
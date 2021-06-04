
function FoundCard({character}){
    const {name, image, bio, point_value} = character;

    return(
        <div className='card'>
            <img alt={name} src={image} className="character-pic" />
            <h2>{name}</h2>
            <p>Point Value: {point_value}</p>
        </div>
    )
}

export default FoundCard;
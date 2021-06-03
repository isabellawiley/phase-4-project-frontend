
function FoundCard({character}){
    const {name, image, bio, point_value} = character;

    return(
        <div>
            <img alt={name} src={image} />
            <h2>{name}</h2>
            <p>{bio}</p>
            <p>Point Value: {point_value}</p>
        </div>
    )
}

export default FoundCard;
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import FoundList from "./FoundList";


function Profile(){
    const {id} = useParams();
    const [nerd, setNerd] = useState();


    useEffect(() => {
        fetch(`http://localhost:3000/nerds/${id}`)
        .then(res => res.json())
        .then((nerd) => setNerd(nerd))
    },[id])

    // console.log(nerd.characters)

    return(
        <div>
            <h1>Nerd Profile</h1>
            <h2>{nerd.name}</h2>
            <FoundList characters={nerd.characters} />
        </div>
    )
}

export default Profile;
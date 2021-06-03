import FoundList from "./FoundList";
import EditProfile from "./EditProfile";

function Profile({currentNerd}){

    return(
        <div>
            <h1>Nerd Profile</h1>
            <EditProfile currentNerd={currentNerd} />
            <h2>{currentNerd.name}</h2>
            <FoundList characters={currentNerd.characters} />
        </div>
    )
}

export default Profile;
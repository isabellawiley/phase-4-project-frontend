import FoundList from "./FoundList";
import EditProfile from "./EditProfile";
import DeleteProfile from "./DeleteProfile";

function Profile({currentNerd}){

    return(
        <div>
            <h1>Nerd Profile</h1>
            <EditProfile currentNerd={currentNerd} />
            <h2>{currentNerd.name}</h2>
            <h2>{currentNerd.total_points} Points</h2>
            <FoundList characters={currentNerd.characters} />
            <DeleteProfile currentNerd={currentNerd} />
        </div>
    )
}

export default Profile;
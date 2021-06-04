import FoundList from "./FoundList";
import EditProfile from "./EditProfile";
import DeleteProfile from "./DeleteProfile";

function Profile({currentNerd, setCurrentNerd, logout}){
console.log(currentNerd)
    return(
        <div>
            <h1>Nerd Profile</h1>
            <EditProfile currentNerd={currentNerd} setCurrentNerd={setCurrentNerd} />
            <h2>{currentNerd.name}</h2>
            <h2>{currentNerd.total_points} Points</h2>
            <FoundList characters={currentNerd.characters} />
            <DeleteProfile currentNerd={currentNerd} logout={logout}/>
        </div>
    )
}

export default Profile;
import FoundList from "./FoundList";
import EditProfile from "./EditProfile";
import DeleteProfile from "./DeleteProfile";

function Profile({currentNerd, setCurrentNerd, logout}){
console.log(currentNerd)
    return(
        <div>
            { currentNerd.name ? 
            <div>
                <h1>{currentNerd.name}'s Nerd Profile</h1>
                <EditProfile currentNerd={currentNerd} setCurrentNerd={setCurrentNerd} />
                <DeleteProfile currentNerd={currentNerd} logout={logout}/>
                <h2><strong>Total Found Characters Points: </strong>{currentNerd.total_points} Points</h2>
                <FoundList characters={currentNerd.characters} />
            </div>
            :
            <h1>Loading...</h1>
            }
        </div>
    )
}

export default Profile;
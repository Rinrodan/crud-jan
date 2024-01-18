
import { useParams } from "react-router-dom";


const UserDashboard = (data) => {
    console.log("userdashboard", data)
    const user = useParams().username
    return (
        <div class="page bg-secondary ">
            <h1>`{user}` Dashboard</h1>

     
        </div>
    )
}
export default UserDashboard;

import { useParams } from "react-router-dom";
// import { LoginContext } from '../../App'
import { useContext } from "react";

const UserDashboard = (data) => {
    // const loggedInUserData = useContext(LoginContext);
    console.log("userdashboard", data)
    const user = useParams().username
    return (
        <div class="page bg-secondary ">
            <h1>{user} Dashboard</h1>

            <div>
                    {/* <div class="h3 m-3">Current UserData: <span class="h1 bg-info">"{loggedInUserData.username}"</span> </div> */}
      
                </div>
        </div>
    )
}
export default UserDashboard;
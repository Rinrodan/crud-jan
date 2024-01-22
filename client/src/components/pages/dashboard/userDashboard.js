
import { useParams } from "react-router-dom";
import { UserContext } from '../../../App'
import { useContext } from "react";
import { AddIngredient } from "../../Utilities/serverRequests";
import Ingredients from "./ingredients";


const UserDashboard = () => {
    // const loggedInUserData = useContext(LoginContext);
    const { userData, updateUserData } = useContext(UserContext);
    const { fname, lname, imageurl, username } = userData;
    // console.log("userdashboard", data)
    const user = userData.username
    return (
        <div class="page bg-secondary ">
            <h1>Welcome back {user && user}</h1>

            <div>
                <img src={imageurl} height="300"/>
            </div>
            <div>
              <Ingredients />
                {/* <AddIngredient /> */}
            </div>
        </div>
    )
}
export default UserDashboard;
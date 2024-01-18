import Login from "../login";
import { useContext } from "react";


const Landing = () => {
    // const { userData, setUserData } = useContext(LoginContext);
    // console.log("landing.js login context  ",LoginContext)
    // console.log("landing.js userdata context ", {userData});
    return (
        <div class="page bg-secondary ">

            <Login />
        </div>
    )
}
export default Landing;
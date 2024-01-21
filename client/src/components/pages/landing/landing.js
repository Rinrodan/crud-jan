import Login from "./login";
import { useContext, useState } from "react";
import { UserContext } from "../../../App";
import { CreateAccountForm } from "./createAccount";


const Landing = () => {

    // const { userData } = useContext(UserContext);
    // console.log("landing.js login context  ",LoginContext)
    // console.log("landing.js userdata context ", {userData});
    
    return (
        <div class="page bg-secondary ">
            <CreateAccountForm />
            <Login />
        </div>
    )
}
export default Landing;
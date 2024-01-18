import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { LoginContext } from '../App'


export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { userData, setUserData } = useContext(LoginContext);
    const Navigate = useNavigate();
// console.log("login.js logincontext", LoginContext)
    // const userDataTest = useContext(LoginContext);

    // console.log("login.js login context", userDataTest);
    // const LoginContext = createContext({
    //     userdata: {},
    //     setUserData: () => {}
    //   });

    const handleSignIn = (e) => {
        e.preventDefault();
        fetch('http://localhost:4000/login', {
          method: "POST",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify({
            username: username,
            password: password
          })
        })
          .then(res => res.json()
          )
          .then(data => {
            
            if (data.username)  Navigate(`/userdashboard/${data.username}`)
            else alert("YOU HAVE FAILED TO LOG IN")
          })
        }




    return (

        <div class="page ">
            <div class="col-md-12 m-auto">
                <div class="row col-md-12 py-4"></div>
                <div class="col pb-4"></div>
                <form onSubmit={handleSignIn} class="input-group m-auto col-md-6">
                    <input 
                        type="text" 
                        class="form-control" 
                        placeholder="Username" 
                        aria-label="username" 
                        aria-describedby="button-addon1"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                    <input 
                        type="password" 
                        class="form-control" 
                        placeholder="Password" 
                        aria-label="password" 
                        aria-describedby="button-addon2"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        
                    />
                    <button 
                        class="btn btn-outline-dark bg-primary" 
                        type="submit" 
                        id="button-addon3">sign-in
                    </button>
                    </form>
                <div class="col"></div>

                <div>
                    <h2>Current UserData: {userData}</h2>
                    <p>Click button to change to testUserName</p>

                    <button onClick={() => setUserData({"username": "testUserName"})}>
                        Switch UserData (Current: {userData})
                    </button>
                </div>

            </div>
        </div>
    
    )
}
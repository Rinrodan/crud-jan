import {useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from '../../../App'



export const LogOut = () => {
    const navigate = useNavigate();
    const { userData, updateUserData } = useContext(UserContext);

    const handleLogOut = () => {
         updateUserData({}) 
         navigate("/");
         
         alert("logged out");
        }
    const shouldShowLogout = userData && Object.keys(userData).length > 3;

    return (
        <>
            {shouldShowLogout && <button onClick={handleLogOut}>LOG OUT</button>}
        </>
    )
}


export const Login = () => {
    const navigate = useNavigate();
    const { userData, updateUserData } = useContext(UserContext);
    const [userName, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
      
        fetch('http://localhost:4000/login', {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({ username: userName, password: password
            })
        })
            .then(res => res.json())
            .then(data => {
                if (data.username){  
                    updateUserData(data);
                    navigate(`/userdashboard/${data.username}`);
                }
                else {alert("YOU HAVE FAILED TO LOG IN")
                }
            });

    };

    
    return (
        <div class="page ">
            <div class="col-md-12 m-auto">
                <div class="row col-md-12 py-4"></div>
                <div class="col pb-4"></div>
                <div class="input-group m-auto col-md-6">
                    <input 
                        type="text" 
                        class="form-control" 
                        placeholder="Username" 
                        aria-label="username" 
                        aria-describedby="button-addon1"
                        id="username"
                        value={userName}
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
                        id="button-addon3"
                        onClick={handleLogin} >sign-in
                    </button>
                    </div>
                <div class="col"></div>
            </div>
        </div>
    
    );
}

  
function LoginWithContext() {

    
    return (
        <UserContext.Consumer>
        {({ updateUserData }) => (
            <>
            <Login updateUserData={updateUserData} />
            <LogOut updateUserData={updateUserData} />
            </>
        )}
        </UserContext.Consumer>
    );
    }
          




export default LoginWithContext;
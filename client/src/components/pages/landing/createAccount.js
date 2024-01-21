import { useContext, useEffect, useState } from "react";
import { UserContext } from '../../../App'
import { Navigate, useNavigate } from "react-router-dom";
// import Toast from 'react-bootstrap/Toast';





export const CreateAccountForm = ({handelCreateAccount}) => {
    const [fname, setFName] = useState('')
    const [lname, setLName] = useState('')
    const [imageurl, setImageURL] = useState('')
    const [email, setEmail] = useState('')
    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [verifyPassword, setVerifyPassword] = useState('')
    const [passMatch, setPassMatch] = useState(false)
    const { userData} = useContext(UserContext);
    const [showCreateAccountForm, setShowCreateAccountForm] = useState(false);
    const toggleForm = () => setShowCreateAccountForm(!showCreateAccountForm);
    const shouldShowCreateAccountButton = userData === null || Object.keys(userData).length < 3;
    const navigate = useNavigate();
    
    


    useEffect(() => {
        if (password === verifyPassword && password) {
          setPassMatch(true);
        } else {
          setPassMatch(false);
        }
      }, [password, verifyPassword]);
        
console.log("passmatch", passMatch)

const clearForm = () => (
    
    setFName(""),
    setLName(""),
    setEmail(""),
    setImageURL(""),
    setUserName(""),
    setPassword("")
);

    const handleCreateSubmit = async (e) => {
        
        e.preventDefault()
        let newUser = {
            fname: fname,
            lname: lname,
            email: email,
            imageurl: imageurl,
            username: username,
            password: password
          }
        if((password === verifyPassword)){
            console.log("handle create Account")
            await fetch(`http://localhost:4000/users`, {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(newUser)
                })
                .then(res => res.json())
          
                .then(addedUserResponse => 
                    alert(`Congrats ${addedUserResponse.fname}! Go ahead and log in for the first time.`))
                .then(  clearForm )
                .then(  toggleForm )
                
       
        } else {
            console.log("failed to create new user")
        }
      };
    return (    
        <>
            { shouldShowCreateAccountButton && < button onClick={toggleForm} class="btn btn-info">create account</button>}
      
            { showCreateAccountForm && <div class="container bg-dark p-4 mt-4 rounded-lg">

                    <form class="col col-md-12">
                        <div class="row">
                            <div class="col text-light h1 p-3 mb-4">Create a new account</div>
                        </div>
                        <div class="row">
                            <div class="col">
                            <div class="row">
                                <div class="input-group mb-3 col-sm-4">
                                    <span class="input-group-text" id="basic-addon1">First Name</span>
                                    <input 
                                        type="text" 
                                        id="fname"
                                        value={fname}
                                        onChange={(e) => setFName(e.target.value)}
                                        class="form-control" 
                                        placeholder="John" 
                                        aria-label="Username" 
                                        aria-describedby="basic-addon1" />
                                        {fname ? (<p class="text-success h4 pl-2">  O </p>) : (<p class="text-danger bg-alert h4 pl-2">  X</p>)}
                                </div>
                            </div>
                            <div class="row">
                                <div class="input-group mb-3 col-sm-4">
                                    <span class="input-group-text" id="basic-addon1">Last Name</span>
                                    <input 
                                        type="text" 
                                        id="lname"
                                        value={lname}
                                        onChange={(e) => setLName(e.target.value)}
                                        class="form-control" 
                                        placeholder="Smith" 
                                        aria-label="Username" 
                                        aria-describedby="basic-addon1" />
                                        {lname ? (<p class="text-success h4 pl-2">  O </p>) : (<p class="text-danger bg-alert h4 pl-2">  X</p>)}
                                </div>
                            </div>
                            <div class="row">
                                <div class="input-group mb-3 col-sm-10 ">
                                    <span class="input-group-text" id="basic-addon1">Email</span>
                                    <input 
                                        type="text" 
                                        id="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        class="form-control" 
                                        placeholder="jsmithy3222@gmail.com" 
                                        aria-label="Username" 
                                        aria-describedby="basic-addon1" />
                                        {email ? (<p class="text-success h4 pl-2">  O </p>) : (<p class="text-danger bg-alert h4 pl-2">  X</p>)}
                                    <div class="col"></div>

                                </div>
                            </div>
                            <div class="row">
                                <div class="input-group mb-3 col-sm-10 ">
                                    <span class="input-group-text" id="basic-addon1">Image Url</span>
                                    <input 
                                        type="text" 
                                        id="imageurl"
                                        value={imageurl}
                                        onChange={(e) => setImageURL(e.target.value)}
                                        class="form-control" 
                                        placeholder="http://image.jpeg" 
                                        aria-label="Username" 
                                        aria-describedby="basic-addon1" />
                                        {imageurl ? (<p class="text-success h4 pl-2">  O </p>) : (<p class="text-danger bg-alert h4 pl-2">  X</p>)}
                                    <div class="col"></div>

                                </div>
                            </div>
                            <div class="row">
                                <div class="input-group mb-3 col-sm-4" aria-label="emptyInput" >
                                </div>
                                
                            </div>
                            <div class="row">
                                <div class="input-group mb-3 col">
                                        <span class="input-group-text" id="basic-addon1">Username</span>
                                        <input 
                                            type="text" 
                                            id="username"
                                            value={username}
                                            onChange={(e) => setUserName(e.target.value)}
                                            class="form-control" 
                                            placeholder="djangoSwimmer1865" 
                                            aria-label="Username" 
                                            aria-describedby="basic-addon1" />
                                            {username ? (<p class="text-success h4 pl-2">  O </p>) : (<p class="text-danger bg-alert h4  pl-2">  X</p>)}
                                    </div>

                                    <div class="col"></div>
                            </div>

                            <div class="row col-md-12">
                                
                                <div class="input-group mb-3 col-md-4">
                                    <span class="input-group-text" id="basic-addon1">Password</span>
                                    <input 
                                        type="password" 
                                        id="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        class="form-control" 
                                        placeholder="wickedsecurepassword42069" 
                                        aria-label="pswd" 
                                        aria-describedby="basic-addon1" />
                                </div>
                                <div class="input-group mb-3 col-md-4">
                                    <span class="input-group-text" id="basic-addon1">Password</span>
                                    <input 
                                        type="password" 
                                        id="verifypassword"
                                        value={verifyPassword}
                                        onChange={(e) => setVerifyPassword(e.target.value)}
                                        class="form-control" 
                                        placeholder="wickedsecurepassword42069" 
                                        aria-label="Username" 
                                        aria-describedby="basic-addon1" />
                                </div>
                        
                                <div class="col">
                                        {passMatch ? (<p class="text-primary bg-alert">Passwords match!</p>) : (<p class="text-danger bg-alert">Passwords do not match.</p>)}
                                    </div>
                            </div>
                        </div>
                        </div>
                        <div class="row">
                    
                        
                                <button class="btn btn-primary btn-lg btn-outline-light col m-1" onClick={handleCreateSubmit}>submit</button>
                            
                                <button class="btn btn-danger col col-sm-2 m-1" onClick={clearForm}>cancel</button>
                    
                        </div>
                    </form> 
                </div>
            }
        </>
        )
}


function CreateAccount() {
    const handelCreateAccount = async (e) => {
        return (
            console.log("CreateAccount.js handle create account")
        )

    }
    

    return (
        <>
        <CreateAccountForm handelCreateAccount={handelCreateAccount}/>
            {/* {shouldShowLogout && <button onClick={handleLogOut}>LOG OUT</button>} */}
        </>
    )
}
export default CreateAccount;
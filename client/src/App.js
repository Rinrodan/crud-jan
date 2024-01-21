
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header';
import Landing from './components/pages/landing/landing';
import UserDashboard from './components/pages/dashboard/userDashboard';
import React, { createContext, useContext, useState } from 'react';




// set the username and userData as context
// recieve the element from login

export const UserContext = createContext(null);


function App() {

  const [loggedOn, setLoggedOn] = useState(false)
  const [userData, setUserData] = useState({});
  
  const value = {userData, setUserData};

  const updateUserData = (data) => {
    setUserData(data);
  };

// const updateData = useContext(UpdateContext);

// console.log("App.js updateContext", updateData)

  // try{
  //   if(updateData === undefined || updateData === null ){
  //     console.log("no udata for update")
  //   } else {
  //     setUserData( updateData );
  //   }
  //   } catch (error) {
  //     // Handle any errors
  //     console.error("GetUserData Error", error);
  //   }



  console.log("App.js userdata", userData);
  return (
    <UserContext.Provider value={{ userData, updateUserData }}>
      <div className="App">
        <header className="App-header">
        <Header/>

        </header>
        <main>
              <Routes>
              <Route path="/" element={<Landing  />}/>
                <Route path="/userdashboard/:username" element={<UserDashboard />} />
                {/* <Route path="/userdashboard/:username/*" element={<UserDashboard />} /> */}
              </Routes>
        </main>
      </div>
    </UserContext.Provider>
  );
}

export default App;

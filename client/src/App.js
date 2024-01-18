
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header';
import Landing from './components/pages/landing';
import UserDashboard from './components/pages/userDashboard';
import React, { createContext, useState } from 'react';

// set the username and userData as context
// recieve the element from login

export const LoginContext = createContext();
// const LoginContext = createContext(()=> console.log("called"))



function App() {

  const [loggedOn, setLoggedOn] = useState(false)
  const [userData, setUserData] = useState({"message":"hello"});
  const value = {userData, setUserData};




  console.log(userData);
  return (
    <LoginContext.Provider value={userData}>
      <div className="App">
        <header className="App-header">
        <Header/>
        </header>
        <main>
              <Routes>
              <Route path="/" element={<Landing />}/>
                <Route path="/userdashboard/:username" element={<UserDashboard />} />
                {/* <Route path="/userdashboard/:username/*" element={<UserDashboard />} /> */}
              </Routes>
        </main>
      </div>
    </LoginContext.Provider>
  );
}

export default App;

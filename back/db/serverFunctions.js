const axios = require('axios');

const GetUserData = async (username) => {
    const api = `http://localhost:4000/users/${username}`;
    // const consoleLog = "From GetUserData serverFunctions.js"
    try {
    //   // Send a GET request to the API using axios
      const response = await axios.get(api);
      // Extract the user data from the response
      const data = response.data;
      // Return the user data
      return data;
    } catch (error) {
      // Handle any errors
      console.error("GetUserData Error", error);
    }
    // return {api, consoleLog}
  };
  
  module.exports = GetUserData;
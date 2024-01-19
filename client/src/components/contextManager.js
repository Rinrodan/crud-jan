import { createContext, useState } from "react";

import UpdateUserData from '../App'



function ContextManager(props) {
    let data = props.data;
    let func = UpdateUserData
  
    console.log("contextManager props data", data)
    // console.log("contextManager props function UpdateUserData", UpdateUserData)
    // const setUpdateEmpty = () => {
    //     func({})
    // }
    // const setUpdateData = () => {
    //     func(data)
    // }

            func(data);


        // // Handle any errors
        // alert("Context Manager Error");
  
    
    
  
  
    
  
    return (
<div></div>
    )
}

  export default ContextManager;
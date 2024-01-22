import { useContext, useEffect, useState } from "react";
import { UserContext } from '../../../App'

// import Toast from 'react-bootstrap/Toast';





export const AddIngredientForm = ({handleAddIngredient}) => {

    const [name, setName] = useState('')
    const [measure_id, setMeasureID] = useState('')
    const [image, setImage] = useState('')


    const [showCreateAccountForm, setShowCreateAccountForm] = useState(false);
    const toggleForm = () => setShowCreateAccountForm(!showCreateAccountForm);
    

    
    


   
const clearForm = () => (
    setName(''),
    setMeasureID(''),
    setImage('')
);

    const handleAddIngredientSubmit = async (e) => {
        
        e.preventDefault()
        let newIngredient = {
            name:name,
            measure_id:measure_id,
            image:image
          }
       
                

        
      
    return (    
        <>
            
        </>
        )
}
}


function AddIngredient() {
    const handleAddIngredient = async (e) => {
        return (
            console.log("CreateAccount.js handle create account")
        )

    }
    

    return (
        <>
        <AddIngredientForm handleAddIngredient={handleAddIngredient}/>
            {/* {shouldShowLogout && <button onClick={handleLogOut}>LOG OUT</button>} */}
        </>
    )
}
export default AddIngredient;


import { useEffect, useState } from "react";
import { FetchAllIngredients } from "../../Utilities/serverRequests";



const Ingredients = () => {
  const [ingredients, setIngredients] = useState([]);
  const [error, setError] = useState(null);

  console.log("ingredients", ingredients)
  console.log("Error:", error)
  useEffect(() => {
    getAllIngredients()
  }, []);

  const getAllIngredients = async () => {
    try {
      console.log("Ingredients.js: get all ingredients function");
      const response = await FetchAllIngredients();
    //   const flattenedResponse = response.flat();
      setIngredients(response);
    } catch (error) {
      console.error(error);
      setError("An error occurred while fetching the ingredients.");
    }
  };
  
  const ingredientsList = () => {
    const listItems = ingredients.map(item => (
        <li key={item.id} class="row mb-2 p-2">
            <div class="col"></div>
            <div class="col-md-4  h3 m-auto ">{item.name}</div>
            <div class="col-md-4  h3 p-3">
                <img src={item.image} alt={item.name} height={100}/>
            </div>
            <div class="col"></div>
        </li>
      ));
    
      // return a <ul> element with the list items as children
      return <ul class="col col-lg-12">{listItems}</ul>;
    }


  return (
    <>
    <div class="row">        
        <div class="col"></div>

        <div class="card col-lg-6">
            <div class="card-header h-2">
                Ingredients List
            </div>
            <div class="card-body">
            {ingredientsList()}
            </div>
        </div>

        <div class="col"></div>
    </div>

    </>
  );
};

export default Ingredients;
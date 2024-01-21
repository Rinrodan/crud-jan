
export const FetchAllIngredients = async () => {

    try {
      const res = await fetch('http://localhost:4000/ingredients', { method: "GET" });
      const ingredients = await res.json();
      return ingredients;
    } catch (error) {
      console.error(error);
      return [];
    }
  };
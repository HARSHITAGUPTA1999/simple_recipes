import React from "react";
import RecipeIntro from "./RecipeIntro";
import RecipePrepTime from "./RecipePrepTime";
import RecipeIngredients from "./RecipeIngredients";
import useTheme from "../Contexts/themeContext";


function Homepage() {

  const {user,darkMode} = useTheme();
  
  return (
    <div className={`mt-5 text-center ${darkMode ? 'text-white' : 'text-dark'}`}>
      {user}
      <div>
        <h2>Welcome to Simple Recipes</h2>
        <h5>Find simple easy to make delicious recipies in just no time !!</h5>
      </div>
      <RecipeIntro />
      <RecipePrepTime />
      <RecipeIngredients />
    </div>
  );
}

export default Homepage;

import React from "react";
import useTheme from "../Contexts/themeContext";

function RecipePrepTime() {

  const {user,darkMode,changeUser} = useTheme();

  const handleTitle = () => {
    console.log("title clicked prep time");
    //now I want to change the user. for which I require a state but I dont have access to it?? So we create a method definition inside our context. And we make state changes using that function from our code ( where we have added a provider ), Now we can just access that function from context and call it .
    changeUser();

  }
  return (
    <div className={`card text-start ${darkMode ? 'text-white' : 'text-dark'}`} style={{ width: "40%", margin: "auto", backgroundColor: darkMode ? '#212529' : '#f7e9f5' }}>
      <h5 className="card-title" onClick={handleTitle}>Preparation Time</h5>
      <ul className="list">
        <li className="list-item">Total Time : 10 minutes </li>
        <li className="list-item">Prep : 5 minutes </li>
        <li className="list-item">Cooking : 5 minutes </li>
      </ul>
    </div>
  );
}

export default RecipePrepTime;

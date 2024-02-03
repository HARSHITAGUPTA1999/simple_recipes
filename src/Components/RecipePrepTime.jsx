import React from "react";

function RecipePrepTime({darkMode}) {
  return (
    <div className={`card text-start ${darkMode ? 'text-white' : 'text-dark'}`} style={{ width: "40%", margin: "auto", backgroundColor: darkMode ? '#212529' : '#f7e9f5' }}>
      <h5 className="card-title">Preparation Time</h5>
      <ul className="list">
        <li className="list-item">Total Time : 10 minutes </li>
        <li className="list-item">Prep : 5 minutes </li>
        <li className="list-item">Cooking : 5 minutes </li>
      </ul>
    </div>
  );
}

export default RecipePrepTime;

import React from "react";
// import styles from './RecipeIntro.module.css'
function RecipeIntro({darkMode}) {
  return (
    // <div className={styles.main}>
    <div className={`card ${darkMode ? 'bg-dark' : 'bg-light'}` } style={{ width: "40%" , margin: 'auto' }}>
      <img
        src="https://pickyeaterblog.com/wp-content/uploads/2023/11/low-calorie-egg-white-omelette.jpg"
        height="300"
        widht="100"
        className="card-img-top"
        alt="omlette"
      />
      <div className={`card-body text-start ${darkMode ? 'text-white' : 'text-dark'}`} >
        <h5 className="card-title">Omlette Recipe</h5>
        <p className="card-text">
          This low-calorie egg white omelette recipe has everything you love
          about a classic omelette but with fewer calories and fat! Dig into
          fluffy eggs and plenty of fresh vegetables for a healthy, delicious,
          and perfectly spiced egg white veggie omelet.
        </p>
      </div>
    </div>
    // </div>

  );
}

export default RecipeIntro;

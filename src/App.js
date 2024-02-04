import { useState } from "react";
import Homepage from "./Components/Homepage";
import { ThemeContextProvider } from "./Contexts/themeContext";

//implememtning light and dark mode

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [user, setUser] = useState('abc'); //defining the state for property user 

  const changeUser = () => {  //defining the method for setting the user 
    setUser('harshita')
  }

  return (
    <ThemeContextProvider value={{user,darkMode,changeUser}}>
    <div className={`container ${darkMode ? "bg-dark" : "bg-light"}`}>
      <div className="btn-group mt-3 gap-2" role="group">
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => setDarkMode((prev) => !prev)}
          >
          SWITCH TO {darkMode ? "LIGHT MODE" : "DARK MODE"}
        </button>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => {
            setUser('harshita')
          }}
          >
          test
        </button>
        {user}
      </div>
      <Homepage />
    </div>
    </ThemeContextProvider>
  );
}

export default App;

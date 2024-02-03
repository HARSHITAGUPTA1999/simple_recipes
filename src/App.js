import { useState } from "react";
import Homepage from "./Components/Homepage";

//implememtning light and dark mode

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <div className={`container ${isDarkMode ? 'bg-dark' : 'bg-light'}`}>
      <div className="btn-group mt-3 gap-2" role="group">
        <button type="button" className="btn btn-primary" onClick={()=>setIsDarkMode((prev)=>!prev)}>
          SWITCH TO {isDarkMode ? 'LIGHT MODE' : 'DARK MODE'}
        </button>
      </div>
      <Homepage darkMode={isDarkMode} />
    </div>
  );
}

export default App;

import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    //definition of properties that we require to access. we dont give functionality logic from here. just the definition.
    darkMode: false,
    user: 'xyz',
    changeUser: () => {},
});

export const ThemeContextProvider = ThemeContext.Provider;

export default function useTheme(){
    //we will use the context
    return useContext(ThemeContext);
}




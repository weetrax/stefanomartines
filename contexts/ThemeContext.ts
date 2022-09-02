import React from "react";

type ThemeContextType = {
    theme: "light" | "dark";
    toggleTheme: () => void;
}

const ThemeContext = React.createContext<ThemeContextType>({
    theme: "dark",
    toggleTheme: () => { }
})

export default ThemeContext;
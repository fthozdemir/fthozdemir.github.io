import React from "react";
import {useState} from "react";

export const Theme = () => {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    return (
        <div className="theme" id="Theme" onClick={toggleTheme}>
            <div className={`theme_color ${theme === "light" ? "is-selected" : ""}`}>
                <div className="_box"></div>
                <div className="_text">Light</div>
            </div>
            <div className={`theme_color ${theme === "dark" ? "is-selected" : ""}`}>
                <div className="_box"></div>
                <div className="_text">Dark</div>
            </div>
        </div>
    );
};

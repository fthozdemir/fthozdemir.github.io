/* eslint-disable */
import React, {createContext, useState, useContext} from "react";

const MascotContext = createContext(null);

export const useMascot = () => {
    const context = useContext(MascotContext);
    if (!context) {
        throw new Error("useMascot must be used within a MascotProvider");
    }
    return context;
};

export const MascotProvider = ({children}) => {
    const [mascotState, setMascotState] = useState({
        x: 0,
        y: 0,
        color: "black",
        mode: "mouse"
    });

    const [targetPosition, setTargetPosition] = React.useState({x: 0, y: 0});

    const handleMascotMove = (event) => {
        setMascotState((prevState) => ({...prevState, x: event.clientX, y: event.clientY}));
    };

    const setMascotColor = (color) => {
        setMascotState((prevState) => ({...prevState, color}));
    };

    const setMascotPosition = ({x, y}) => {
        setMascotState((prevState) => ({...prevState, x, y}));
    };

    const setMascotMode = (mode) => {
        setMascotState((prevState) => ({...prevState, mode}));
        console.log("mode changed to " + mode + " in mascot context");
    };

    return (
        <MascotContext.Provider
            value={{
                mascotState,
                handleMascotMove,
                setMascotColor,
                setMascotPosition,
                setMascotMode,
                targetPosition,
                setTargetPosition
            }}
        >
            {children}
        </MascotContext.Provider>
    );
};

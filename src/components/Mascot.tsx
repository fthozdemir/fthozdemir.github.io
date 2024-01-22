/* eslint-disable */
import React, {useState, useEffect} from "react";
import {useMascot} from "./contexts/mascot-context";

const Mascot = () => {
    const {mascotState} = useMascot();
    return (
        <div
            style={{
                position: "absolute",
                top: mascotState.y + "px",
                left: mascotState.x + "px",
                width: "50px",
                height: "50px",
                backgroundColor: "blue",
                borderRadius: "50%",
                transform: "translate(-50%, -50%)",
                zIndex: -1
            }}
        />
    );
};

export default Mascot;

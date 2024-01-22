/* eslint-disable*/
import React, {useEffect} from "react";
import {useMascot} from "../contexts/mascot-context";

const MascotController = ({children}) => {
    const {setMascotPosition, mascotState, setTargetPosition, targetPosition} = useMascot();

    useEffect(() => {
        const handleMove = (e) => {
            if (mascotState.mode === "mouse") {
                setTargetPosition({x: e.clientX, y: e.clientY});
            }
        };

        // Listen to mouse movement
        document.addEventListener("mousemove", handleMove);

        return () => {
            // Clean up
            document.removeEventListener("mousemove", handleMove);
        };
    }, [mascotState.mode]);

    useEffect(() => {
        let animationFrameId;

        const moveFollower = () => {
            const dx = (targetPosition.x - mascotState.x) * 0.1;
            const dy = (targetPosition.y - mascotState.y) * 0.1;

            setMascotPosition({x: mascotState.x + dx, y: mascotState.y + dy});
            animationFrameId = requestAnimationFrame(moveFollower);
        };

        animationFrameId = requestAnimationFrame(moveFollower);
        return () => cancelAnimationFrame(animationFrameId);
    }, [targetPosition, mascotState.x, mascotState.y, setMascotPosition]);

    return <>{children}</>;
};

export default MascotController;

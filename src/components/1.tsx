/* eslint-disable */
import React, {useState, useEffect} from "react";

const MouseFollower = () => {
    const [mousePosition, setMousePosition] = useState({x: 0, y: 0});
    const [followPosition, setFollowPosition] = useState({x: 0, y: 0});
    const minDistance = 10;
    const maxDistance = 50;
    // Mouse move handler
    const handleMouseMove = (e) => {
        setMousePosition({x: e.clientX, y: e.clientY});
    };

    useEffect(() => {
        // Listen to mouse movement
        document.addEventListener("mousemove", handleMouseMove);

        return () => {
            // Clean up
            document.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    useEffect(() => {
        let feared = true;
        const moveFollower = () => {
            // Calculate the distance to move on each axis

            const dx = (mousePosition.x - followPosition.x) * 0.1;
            const dy = (mousePosition.y - followPosition.y) * 0.1;

            // Update the follower position

            const distance = Math.sqrt(dx * dx + dy * dy);
            if (distance > (feared ? minDistance + 10 : minDistance) && distance < maxDistance) {
                feared = false;
                setFollowPosition({
                    x: followPosition.x + dx,
                    y: followPosition.y + dy
                });
            } else if (distance < minDistance) {
                feared = true;
                setFollowPosition({
                    x: followPosition.x - dx,
                    y: followPosition.y - dy
                });
            }
            requestAnimationFrame(moveFollower);
        };

        requestAnimationFrame(moveFollower);
    }, [mousePosition, followPosition]);

    return (
        <div
            style={{
                position: "absolute",
                top: followPosition.y + "px",
                left: followPosition.x + "px",
                width: "50px",
                height: "50px",
                backgroundColor: "blue",
                borderRadius: "50%",
                transform: "translate(-50%, -50%)"
            }}
        />
    );
};

export default MouseFollower;

import React, {useState} from "react";
import leftHandImage from "assets/image/handLeft.png";
import rightHandImage from "assets/image/handRight.png"; // Update with actual path
import {useDraggable} from "hooks/useDraggable";

const ExampleComponent: React.FC = () => {
    const {translate, handleMouseDown} = useDraggable();
    const [showHands, setShowHands] = useState(false);

    const handleClick = () => {
        setShowHands(true);
        setTimeout(() => setShowHands(false), 3000); // Adjust time as needed
    };

    return (
        <div>
            <div
                style={{transform: `translate(${translate.x}px, ${translate.y}px)`}}
                onMouseDown={handleMouseDown}
            >
                <button onClick={handleClick}>Click Me</button>
            </div>
            {showHands && (
                <>
                    <img src={leftHandImage} className="left-hand" alt="Left Hand" />
                    <img src={rightHandImage} className="right-hand" alt="Right Hand" />
                </>
            )}

            <div className="hand">
                <div className="finger" id="thumb"></div>
                <div className="finger" id="index"></div>
                <div className="finger" id="middle"></div>
                <div className="finger" id="ring"></div>
                <div className="finger" id="pinky"></div>
                <div className="palm"></div>
            </div>
        </div>
    );
};

export default ExampleComponent;

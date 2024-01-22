import React from "react";
import {Rnd} from "react-rnd";
import {useState} from "react";

const DraggableButton = () => {
    interface State {
        width?: number | string;
        height?: number | string;
        x?: number;
        y?: number;
    }
    const [state, setState] = useState<State>({
        width: 400,
        height: 400,
        x: 10,
        y: 10
    });
    const [fontSize, setFontSize] = useState(40); // initial font size

    const [isDragging, setIsDragging] = useState(false);

    const handleDragStop = (e, d) => {
        setState({x: d.x, y: d.y});
        if (isDragging) {
            e.stopPropagation();
            e.preventDefault();
        }
    };
    /* const handleClick = () => {
        if (isDragging) {
            setIsDragging(false);
            return;
        }
        console.log("clicked");
    };
*/
    const handleDragging = () => {
        setIsDragging(true);
    };

    const parInt = (str: string) => {
        return parseInt(str, 10);
    };

    return (
        <div className="w-11 h-11">
            <Rnd
                position={{x: state.x, y: state.y}}
                onDragStop={handleDragStop}
                onDrag={handleDragging}
                onResize={(e, direction, ref, delta, position) => {
                    const newFontSize = Math.round(
                        (ref.offsetWidth / parInt(state.width as string)) * fontSize
                    );
                    if (newFontSize) setFontSize(newFontSize);
                    console.log(
                        "newFontSize",
                        newFontSize,
                        "ref.offsetWidth",
                        ref.offsetWidth,
                        "state.width",
                        parInt(state.width as string),
                        "fontSize",
                        fontSize
                    );
                    setState({
                        width: ref.style.width,
                        height: ref.style.height,
                        ...position
                    });
                }}
            >
                <h1 className="neue" style={{fontSize: `${fontSize}px`, zIndex: 1000}}>
                    Fatih Ozdemir
                </h1>
            </Rnd>
        </div>
    );
};

export default DraggableButton;

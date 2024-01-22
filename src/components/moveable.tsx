/* eslint-disable */
import React, {useRef} from "react";
import Moveable from "react-moveable";
import "../moveable.css";
import {useMascot} from "./contexts/mascot-context";
import {useEffect, useState} from "react";
export const MoveableComponent: React.FC = () => {
    const targetRef = useRef(null);
    const {setMascotPosition, releaseMascot, setMascotMode, setTargetPosition, mascotState} =
        useMascot();
    const [clickPosition, setClickPosition] = useState({x: 0, y: 0});
    const [translateDif, setTranslateDif] = useState({x: 0, y: 0});
    function adjustFontSizeToFit(ref) {
        if (!ref.current) return;

        let fontSize = 30; // Starting font size
        ref.current.style.fontSize = fontSize + "px";

        // Increase font size until it overflows
        while (
            ref.current.scrollWidth <= ref.current.clientWidth &&
            ref.current.scrollHeight <= ref.current.clientHeight &&
            fontSize < 300
        ) {
            fontSize++;
            ref.current.style.fontSize = fontSize + "px";
        }
        // Decrease font size to fit
        if (fontSize > 1) {
            fontSize--;
            ref.current.style.fontSize = fontSize + "px";
        }
    }
    function calculateMinDimensions() {
        const scrollWidth = targetRef.current.scrollWidth;
        const scrollHeight = targetRef.current.scrollHeight;
        const fontSize = parseInt(targetRef.current.style.fontSize);

        const aspectRatio = scrollWidth / scrollHeight;
        const minWidth = Math.sqrt(fontSize * fontSize * aspectRatio);
        const minHeight = Math.sqrt((fontSize * fontSize) / aspectRatio);

        return {
            minWidth: minWidth + "px",
            minHeight: minHeight + "px"
        };
    }

    const transformToXY = (transform) => {
        const _xy = transform.match(/-?\d+\.?\d*/g);
        let xy;
        try {
            xy = _xy.map((item) => parseInt(item));
        } catch (err) {
            console.log("err", err);
        }
        return {x: xy[0], y: xy[1]};
    };
    /*
    function adjustFontSizeToFit(ref) {
        let fontSize = 1; // Starting font size
        ref.current.style.fontSize = fontSize + "px";

        const isOverflowing = () => {
            return (
                ref.current.scrollHeight > ref.current.clientHeight ||
                ref.current.scrollWidth > ref.current.clientWidth
            );
        };

        while (!isOverflowing() && fontSize < 100) {
            fontSize++;
            ref.current.style.fontSize = fontSize + "px";
        }

        if (isOverflowing()) {
            fontSize--;
            ref.current.style.fontSize = fontSize + "px";
        }
        console.log("ref.current.style.offset.width", ref.current.style.width);
        ref.current.style.fontSize = ref.current.style.width;
    }
    */

    const handleResize = () => {
        if (targetRef.current) {
            adjustFontSizeToFit(targetRef);
        }
    };

    return (
        <div>
            <h1 ref={targetRef} className=" text-center">
                Fatih Özdemir
            </h1>
            <Moveable
                xs
                target={targetRef}
                container={null}
                origin={false}
                /* Resize event edges */
                edge={true}
                /* draggable */
                draggable={true}
                throttleDrag={0}
                onDragStart={({target, clientX, clientY}) => {
                    console.log("onDragStart", target);
                    setClickPosition({x: clientX, y: clientY});
                }}
                onDrag={({
                    target,
                    beforeDelta,
                    beforeDist,
                    left,
                    top,
                    right,
                    bottom,
                    delta,
                    dist,
                    transform,
                    clientX,
                    clientY,
                    translate,
                    isFirstDrag
                }) => {
                    //console.log("onDrag left, top", left, top);
                    // target!.style.left = `${left}px`;
                    // target!.style.top = `${top}px`;

                    const dx = mascotState.x - clickPosition.x + translateDif.x;
                    const dy = mascotState.y - clickPosition.y + translateDif.y;
                    console.log("translateDif", translateDif);
                    console.log("isFirstDrag", isFirstDrag);
                    const newTransform = `translate(${Math.round(dx)}px, ${Math.round(dy)}px)`;
                    console.log("newTransform", newTransform);

                    target!.style.transform = newTransform;
                }}
                onDragEnd={({target, isDrag, clientX, clientY}) => {
                    console.log("onDragEnd", target, isDrag);
                    const tt = transformToXY(target!.style.transform);
                    setTranslateDif({
                        x: tt.x,
                        y: tt.y
                    });
                    console.log("tt", translateDif);
                    setMascotMode("mouse");
                }}
                /* When resize or scale, keeps a ratio of the width, height. */
                keepRatio={false}
                /* resizable*/
                /* Only one of resizable, scalable, warpable can be used. */
                resizable={true}
                throttleResize={0}
                onResizeStart={({target, clientX, clientY}) => {
                    //console.log("onResizeStart", target);
                    setMascotMode("resize");
                    setClickPosition({x: clientX, y: clientY});
                }}
                onResize={({
                    target,
                    width,
                    height,
                    dist,
                    delta,
                    direction,
                    clientX,
                    clientY,
                    transform
                }) => {
                    //console.log("onResize", target);
                    target!.style.width = `${width}px`;
                    target!.style.height = `${height}px`;
                    handleResize();
                    console.log("dist", dist);
                    //target!.style.transform = _transform;
                    const dx = clickPosition.x + (dist[0] * direction[0]) / 2;
                    const dy = clickPosition.y + (dist[1] * direction[1]) / 2;
                    setTargetPosition({x: dx, y: dy});
                }}
                onResizeEnd={({target, isDrag, clientX, clientY}) => {
                    console.log("onResizeEnd", target, isDrag);
                    setMascotMode("mouse");
                    if (targetRef.current.scrollWidth > targetRef.current.scrollHeight) {
                        target!.style.height = "fit-content";
                    } else {
                        target!.style.width = "fit-content";
                        target!.style.height = "fit-content";
                    }
                }}
                /* scalable */
                /* Only one of resizable, scalable, warpable can be used. */
                scalable={true}
                throttleScale={0}
                onScaleStart={({target, clientX, clientY}) => {
                    console.log("onScaleStart", target);
                }}
                onScale={({target, scale, dist, delta, transform, clientX, clientY}) => {
                    console.log("onScale scale", scale);
                    target!.style.transform = transform;
                    //handleScale();
                }}
                onScaleEnd={({target, isDrag, clientX, clientY}) => {
                    console.log("onScaleEnd", target, isDrag);
                }}
                /* rotatable */
                rotatable={false}
                throttleRotate={0}
                onRotateStart={({target, clientX, clientY}) => {
                    console.log("onRotateStart", target);
                }}
                onRotate={({target, delta, dist, transform, clientX, clientY}) => {
                    console.log("onRotate", dist);
                    target!.style.transform = transform;
                }}
                onRotateEnd={({target, isDrag, clientX, clientY}) => {
                    console.log("onRotateEnd", target, isDrag);
                }}
                // Enabling pinchable lets you use events that
                // can be used in draggable, resizable, scalable, and rotateable.
                pinchable={true}
                onPinchStart={({target, clientX, clientY, datas}) => {
                    // pinchStart event occur before dragStart, rotateStart, scaleStart, resizeStart
                    console.log("onPinchStart");
                }}
                onPinch={({target, clientX, clientY, datas}) => {
                    // pinch event occur before drag, rotate, scale, resize
                    console.log("onPinch");
                }}
                onPinchEnd={({isDrag, target, clientX, clientY, datas}) => {
                    // pinchEnd event occur before dragEnd, rotateEnd, scaleEnd, resizeEnd
                    console.log("onPinchEnd");
                }}
            />
        </div>
    );
};

export default MoveableComponent;

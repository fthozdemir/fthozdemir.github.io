import {useState, useCallback, useRef, useEffect} from "react";

export const useDraggable = () => {
    const [startPosition, setStartPosition] = useState({x: 0, y: 0});
    const [translate, setTranslate] = useState({x: 0, y: 0});
    const draggingRef = useRef(false);
    const [width, setWidth] = useState(100);
    const [height, setHeight] = useState(50);
    const [isResizing, setIsResizing] = useState(false);
    const [resizeDirection, setResizeDirection] = useState(null);
    const lastSize = useRef({width: 0, height: 0});

    const handleMouseDown = useCallback(
        (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
            draggingRef.current = true;
            if (event.target instanceof HTMLElement && event.target.className.includes("resizer")) {
                setIsResizing(true);
                setResizeDirection(event.target.dataset.direction);
            } else {
                setStartPosition({
                    x: event.clientX - translate.x,
                    y: event.clientY - translate.y
                });
            }
            event.preventDefault();
        },
        [translate]
    );

    const handleMouseMove = useCallback(
        (event: MouseEvent) => {
            if (draggingRef.current) {
                if (isResizing) {
                    const dx = event.clientX - lastSize.current.width;
                    const dy = event.clientY - lastSize.current.height;
                    switch (resizeDirection) {
                        case "ne":
                            setWidth(lastSize.current.width + dx);
                            break;
                        case "se":
                            setWidth(lastSize.current.width + dx);
                            setHeight(lastSize.current.height + dy);
                            break;
                        case "sw":
                            setWidth(lastSize.current.width - dx);
                            break;
                        case "nw":
                            setWidth(lastSize.current.width - dx);
                            setHeight(lastSize.current.height - dy);
                            break;
                    }
                } else {
                    setTranslate({
                        x: event.clientX - startPosition.x,
                        y: event.clientY - startPosition.y
                    });
                }
            }
        },
        [startPosition, isResizing, resizeDirection]
    );
    const handleMouseUp = useCallback(() => {
        draggingRef.current = false;
        setIsResizing(false);
    }, []);

    useEffect(() => {
        if (draggingRef.current) {
            document.addEventListener("mousemove", handleMouseMove);
            document.addEventListener("mouseup", handleMouseUp);
        } else {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);
        }
        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);
        };
    }, [handleMouseMove, handleMouseUp]);

    return {translate, handleMouseDown, width, setWidth, height, setHeight};
};

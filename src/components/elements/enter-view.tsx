import React from "react";
import {useState, useEffect} from "react";
export const EnterView = () => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, 3500);

        return () => clearTimeout(timer);
    }, []);

    if (!isVisible) return null;
    return (
        <div id="EnterView">
            <div className="_t1">Fatih Ozdemir</div>
            <div className="_t2">Portfolio</div>
        </div>
    );
};

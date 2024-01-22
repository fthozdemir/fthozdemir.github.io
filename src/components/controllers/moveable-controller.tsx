/* eslint-disable */
import {useMascot} from "components/contexts/mascot-context";
import {useState} from "react";

const MoveableController = () => {
    const [position, setPosition] = useState({x: 0, y: 0});
    // Mouse move handler

    return {position, setPosition};
};

export default MoveableController;

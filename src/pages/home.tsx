import Mascot from "components/Mascot";
import {Page} from "components/elements/page";
import MoveableComponent from "components/moveable";
import React from "react";

export const Home = () => {
    return (
        <div>
            <Page />
            <MoveableComponent />
            <Mascot />
        </div>
    );
};

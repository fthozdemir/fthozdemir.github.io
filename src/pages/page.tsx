import React from "react";
import {Theme} from "../components/elements/theme";
import {Frame} from "../components/elements/frame";
import {Header} from "../components/elements/header";

export const Page = ({children}) => {
    return (
        <>
            <div id="Page">
                <div className="mask" id="Mask">
                    <div className="mask_top"></div>
                    <div className="mask_bottom"></div>
                </div>
                <Frame />
                <Theme />
                <Header />
                <main className="content" id="Content" data-scroll="area">
                    <div className="content_inner" data-scroll="target">
                        {children}
                    </div>
                </main>
            </div>
        </>
    );
};

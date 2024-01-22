import React from "react";
import {Theme} from "./theme";
import {Frame} from "./frame";
import {Header} from "./header";

import {ProjectsSection} from "components/sections/projects-section";
export const Page = () => {
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
                        <ProjectsSection />
                    </div>
                </main>
            </div>
        </>
    );
};

import React from "react";
import {Navigation} from "./navigation";

export const Header = () => {
    return (
        <header className="siteHeader" id="SiteHeader">
            <h1 className="siteHeader_title">Fatih Ozdemir</h1>
            <p className="siteHeader_label">Engineer & Developer</p>
            <nav className="siteHeader_nav">
                <Navigation />
            </nav>
        </header>
    );
};

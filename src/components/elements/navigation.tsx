import React from "react";

const Menu = [
    {
        name: "Home",
        link: "/"
    },
    {
        name: "Projects",
        link: "/Projects"
    }
];
export const Navigation = () => {
    return (
        <nav className="siteHeader_nav">
            <ol>
                {Menu.map((item, index) => {
                    return (
                        <li key={index}>
                            <div className="_dot">&#x25cf;</div>
                            <a className="_text" href={item.link}>
                                {item.name}
                            </a>
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
};

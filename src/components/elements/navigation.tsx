import React, {useEffect} from "react";
import {useNavigate} from "react-router-dom";
const Menu = [
    {
        name: "Home",
        link: "/"
    },
    {
        name: "Projects",
        link: "/projects"
    }
];

export const Navigation = () => {
    const [targetPath, setTargetPath] = React.useState(window.location.pathname);
    const navigate = useNavigate();

    useEffect(() => {
        let isMounted = true;
        const timeout = setTimeout(() => {
            if (isMounted) {
                navigate(targetPath);
            }
        }, 0.4 * 1000);

        return () => {
            isMounted = false;
            clearTimeout(timeout);
        };
    }, [targetPath, navigate]);

    const handleNavigation = (path: string) => {
        if (path === targetPath) return;
        const element = document.getElementById("page_section");
        if (element) {
            element.classList.add("fadeOut");
            setTargetPath(path);
        }
    };

    return (
        <nav className="siteHeader_nav">
            <ol>
                {Menu.map((item, index) => {
                    return (
                        <li key={index}>
                            <div className="_dot">&#x25cf;</div>
                            <a className="_text" onClick={() => handleNavigation(item.link)}>
                                {item.name}
                            </a>
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
};

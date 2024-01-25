import React from "react";
import Section from "./section";
export const ProjectsSection = () => {
    return (
        <Section>
            <div className="page_content project scrollable">
                <div className="project_section ">
                    <h2 className="project_heading">&#x25a0; Projects (Future Experience)</h2>
                    <div className="project_list ">
                        <a
                            className="project_item text-btn"
                            href="https://www.youtube.com/watch?v=1QNTyC69ml0"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <div className="project_title">Ahbap S&A Museum</div>
                            <div className="project_info">2023 / Infinia / Special</div>
                        </a>
                        <a
                            className="project_item text-btn"
                            href="https://safevideo.ai"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <div className="project_title">SafeVideo AI</div>
                            <div className="project_info">2023 / Partner / Startup</div>
                        </a>
                    </div>
                </div>
                <div className="project_section">
                    <h2 className="project_heading">&#x25a0; Projects (R&D)</h2>
                    <div className="project_list">
                        <a
                            className="project_item text-btn"
                            href="https://nuve.com.tr/en/products/test-cabinets"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <div className="project_title">NUVE</div>
                            <div className="project_info">2023 / Infinia / Climatic Cabin</div>
                        </a>
                        <a
                            className="project_item text-btn"
                            href="https://www.youtube.com/watch?v=HIX8KVevFmQ"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <div className="project_title">VESTEL hob & oven</div>
                            <div className="project_info">2022 / IFA Expo / Prototype</div>
                        </a>
                        <span className="project_item text-btn">
                            <div className="project_title">Kinetic Bricks</div>
                            <div className="project_info">2022 / Infinia / Art</div>
                        </span>
                        <a
                            className="project_item text-btn"
                            href="https://arpanet.com.tr/#spook-main"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <div className="project_title">SPOOK</div>
                            <div className="project_info">2020 / Arpanet / AR</div>
                        </a>
                    </div>
                </div>
                <div className="project_section">
                    <h2 className="project_heading">&#x25a0; Projects (Web)</h2>
                    <div className="project_list">
                        <a
                            className="project_item text-btn"
                            href="https://ormuh.org.tr"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <div className="project_title">ormuh</div>
                            <div className="project_info">2021 / Otto / .org</div>
                        </a>
                        <a
                            className="project_item text-btn"
                            href="https://www.youtube.com/watch?v=_nYy__Bmizs"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <div className="project_title">GUPP</div>
                            <div className="project_info">2017 / Gazi University / Code Judger</div>
                        </a>
                    </div>
                </div>
                <div className="project_section">
                    <h2 className="project_heading">&#x25a0; Projects (Game)</h2>
                    <div className="project_list">
                        <a
                            className="project_item text-btn"
                            href="https://drive.google.com/file/d/1awwL6KXbJcc7JMHjvOnM0vsyKrthWdRy/view"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <div className="project_title">Kelimetris</div>
                            <div className="project_info">2021 / Personal / Startup</div>
                        </a>
                    </div>
                </div>
            </div>
        </Section>
    );
};

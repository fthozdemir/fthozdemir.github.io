import React from "react";
import Section from "./section";

const HomeSection = () => {
    return (
        <Section>
            <div className="page_content home">
                <p className="home_aboutme">
                    <span>Born in 1994</span>
                    <span>in Izmir, Turkey.</span>
                    <span>I believe that </span>
                    <span>the definition of </span>
                    <span>engineering is the</span>
                    <span>most effective use</span>
                    <span> of the right tools</span>
                    <span>for optimum benefit,</span>
                    <span>and I am in constant</span>
                    <span>pursuit of learning</span>
                    <span>and development.</span>
                </p>
            </div>
        </Section>
    );
};

export default HomeSection;

import React from "react";

const Section = ({children}) => {
    return (
        <section id="page_section" className="page">
            {children}
        </section>
    );
};

export default Section;

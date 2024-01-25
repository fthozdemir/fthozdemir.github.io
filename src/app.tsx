import React from "react";
import {HashRouter, Route, Routes} from "react-router-dom";
import {ROUTES} from "config/constants";
import "./index.css";
import {MascotProvider} from "components/contexts/mascot-context";
import MascotController from "components/controllers/mascot-controller";
import {EnterView} from "components/elements/enter-view";
import {Page} from "pages/page";
import HomeSection from "components/sections/home-section";
import {ProjectsSection} from "components/sections/projects-section";

const App = () => {
    return (
        <div className="App">
            <MascotProvider>
                <MascotController>
                    <HashRouter>
                        <Page>
                            <Routes>
                                <Route path={ROUTES.HOME} element={<HomeSection />} />
                                <Route path={ROUTES.PROJECTS} element={<ProjectsSection />} />
                            </Routes>
                        </Page>
                    </HashRouter>
                    <EnterView />
                </MascotController>
            </MascotProvider>
        </div>
    );
};

export default App;

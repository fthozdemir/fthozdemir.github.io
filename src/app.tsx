import React from "react";
import {HashRouter, Route, Routes} from "react-router-dom";
import {ROUTES} from "config/constants";
import "./index.css";
import {Home} from "pages/home";
import {MascotProvider} from "components/contexts/mascot-context";
import MascotController from "components/controllers/mascot-controller";
const App = () => {
    return (
        <div className="App">
            <MascotProvider>
                <MascotController>
                    <HashRouter>
                        <Routes>
                            <Route
                                path={ROUTES.HOME}
                                element={
                                    <div
                                        style={{
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            width: "100%"
                                        }}
                                    >
                                        {
                                            //<DraggableButton />
                                            <Home />
                                        }
                                    </div>
                                }
                            />
                        </Routes>
                    </HashRouter>
                </MascotController>
            </MascotProvider>
        </div>
    );
};

export default App;

import {createRoot} from "react-dom/client";
import App from "./app";
// Initialize the React App
const container = document.getElementById("root");
if (container) {
    const navRoot = createRoot(container);
    navRoot.render(App());
} else {
    console.error("Root element not found in the DOM");
}

import React  from "react";
import ReactDOM from "react-dom/client";
import BodyComponent4 from "./src/Components/BodyComponent4";



const AppRender4 = function () {
    return (
        <div>
            <BodyComponent4/>
        </div>
    )
}

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppRender4 />);

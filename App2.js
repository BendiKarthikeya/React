import React  from "react";
import ReactDOM from "react-dom/client";
import HeaderYoutube from "./src/YouTube/HeaderYoutube";
import BodyYoutube from "./src/YouTube/BodyYoutube";


const AppRender2 = function () {
    return (
        <div>
            <HeaderYoutube/>
            <BodyYoutube/>
        </div>
    )
}

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppRender2 />);

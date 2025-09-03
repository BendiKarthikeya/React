import React from "react";
import ReactDOM from 'react-dom/client';


const heading = React.createElement("h1", 
		{
    			style: {
       				 color: "red", textAlign: 'center'
    			       }
		},
    		"Welcome to React World, Hello User");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
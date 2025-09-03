import React from "react";
import ReactDOM from 'react-dom/client';

const Title = ()=> <p>Learn React with Jumma</p>
const HeadingComponect = function (){

        return(
                <div>
                        <Title/>
                        <h1 id='heading'>React From PWIOI</h1>
                </div>
        )
}
const root = ReactDOM.createRoot(document.getElementById("root")).render(<HeadingComponect />);





import React, { useState } from "react";
import { Link } from "react-router";

const HeadingComponent = function (z) {
    console.log("header is rendering");
    const [btnName, setBtnName] = useState("Login");
    return (
        <div style={{ backgroundColor: 'black', display: 'flex', justifyContent: 'space-between', color: 'white', alignItems: 'center', padding: '5px' }}>
            <div>
                <img src='https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExOWlld3hycmZuczlucXZ6NmU4cTMzc2twODUwMTc4azQwN29xOWdhNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/STqyREqVKtFJbAx7kU/giphy.gif' alt="YouTube Logo" style={{ height: "40px" }} />
            </div>
            <div>
                <ul style={{ display: 'flex', listStyle: 'none', justifyContent: 'space-between', alignItems: 'center', gap: '25px', margin: 0, padding: 0 }}>
                    <li>
                        <Link to={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link to={"/about"}>About Us</Link>
                    </li>
                    <li>
                        <Link to={"/contact"}>Contact</Link>
                    </li>
                    <li>
                        <Link to={"/products"}>Products</Link>
                    </li>
                    <li>
                        <button
                            onClick={() => {
                                setBtnName(btnName === "Login" ? "LogOut" : "Login");
                            }}
                        >
                            
                            {btnName}
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default HeadingComponent;
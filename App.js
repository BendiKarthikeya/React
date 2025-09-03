import React from "react";
import ReactDOM from 'react-dom/client';
import youtubeLogo from './public/Images/youtube logo.webp';
import HeadingComponent from './src/Components/HeaderComponent';
import AboutUs from './src/Components/AboutUs';
import BodyComponenet3 from './src/Components/BodyComponent3';   
import FooterComponent from './src/Components/FooterComponent';
import ErrorComponent from './src/Components/ErrorComponent';
import Contact from "./src/Components/Contact";
import Restaurant from "./src/Components/Restaurant";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";


const AppRender = function () {
        return (
                <div>
                        <HeadingComponent/>
                        <Outlet/>
                        <FooterComponent/>
                </div>
        )
}

const routerPath = createBrowserRouter([
  {
    path: "/",
    element: <AppRender />,
    children:[{
        path: "/about",
        element: <AboutUs />
    },{
        path: "/contact",
        element: <Contact />
    },{
        path: "/",
        element: <BodyComponenet3 />
    },{
        path: "/restaurant/:id",
        element: <Restaurant />
    }
],
    
    errorElement: <ErrorComponent />
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root")).render(<RouterProvider router={routerPath} />);






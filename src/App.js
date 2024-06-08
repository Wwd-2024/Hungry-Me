import React from 'react';
import ReactDOM from "react-dom/client";
import Header from './components/Header';
import Body from './components/Body';
import About from './components/About';
import Error from './components/Error';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';


const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
            <Body/>
        </div>
    )
}

const appRoutes = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout />,
        errorElement:<Error />
    },
    {
        path:"/about",
        element:<About />
    }

]);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRoutes}/>);
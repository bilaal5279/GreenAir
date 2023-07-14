import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Landing from "./pages/Landing";
import Services from "./pages/Services";
import Work from "./pages/Work";
import ContactUs from "./pages/ContactUs";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing/>,
  },
  {
    path: "/services",
    element: <Services/>,
  },  
  {
    path: "/Work",
    element: <Work/>,
  },
  {
    path: "/Contact",
    element: <ContactUs/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
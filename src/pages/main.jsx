import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./home";
import Produtos from "./produtos";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/produtos",
    element: <Produtos />,
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
<RouterProvider router={router} />
)

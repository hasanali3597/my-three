import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from "./Pages/Home.jsx";
import Contact from "./Pages/Contact.jsx";
import About from "./pages/About.jsx";
import Root from "./root/root.jsx";
import PlantDetails from "./pages/PlantDetails.jsx";
import axios from "axios";
import LoadingSpinner from "./components/LoadingSpinner.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    hydrateFallbackElement:<LoadingSpinner
    children: [
      {
        index: true,
        element: <Home />,
        loader: () => fetch("https://openapi.programming-hero.com/api/plants"),
      },

      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/plant-details/:id",
        element: <PlantDetails/>,
       loader: ({params})=>  
          axios (`https:openapi.programming-hero.com/api/plant/${params.id}`),
      },
    ],
  }, 
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

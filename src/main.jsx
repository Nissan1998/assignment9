import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Main from "./Components/main/Main";
import Blog from "./Components/Blog/Blog";
import AppliedJob from "./Components/AppliedJob/AppliedJob";
import Home from "./Components/Layout/Home";
import Statistics from "./Components/Statistics/Statistics";
import ViewDetails from "./Components/viewDetails/ViewDetails";
import ErrorPage from "./Components/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Main></Main>,
      },
      {
        path: "statistics",
        element: <Statistics></Statistics>,
      },

      {
        path: "/applied",
        element: <AppliedJob></AppliedJob>,
        loader: () => fetch("/FeaturedJobs.json"),
      },

      {
        path: "blog",
        element: <Blog></Blog>,
      },
      {
        path: "viewDetails/:detailsId",
        element: <ViewDetails></ViewDetails>,
        loader: () => fetch("/FeaturedJobs.json"),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

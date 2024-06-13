import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from "@/Layout/Layout";
import PresenterPage from "./pages/PresenterPage";
import ProjectPage from "./pages/ProjectPage";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [   
        {
            index: true,
            element: <HomePage />
        },
        {
          path: "presenters",
          element: <PresenterPage />
        },
        {
          path: "projects",
          element: <ProjectPage />
        }
      ]
    },
  ]);
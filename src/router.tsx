import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from "@/Layout/Layout";
import CategoryPage from "./pages/CategoryPage";
import ProductPage from "./pages/ProductPage";
import PresenterPage from "./pages/PresenterPage";

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
            path: "categories",
            element: <CategoryPage />
        },
        {
          path: "products",
          element: <ProductPage />
        },
        {
          path: "presenters",
          element: <PresenterPage />
        },
        {
          path: "projects",
          element: <PresenterPage />
        }
      ]
    },
  ]);
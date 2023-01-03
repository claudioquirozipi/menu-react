import { createBrowserRouter } from "react-router-dom";

import MenuCreatePage from "../../menu/pages/menuCreate";
import CategoryPage from "../../category/pages/category";
import MenuAdminPage from "../../menu/pages/menuAdmin";
import MenuEditPage from "../../menu/pages/menuEdit";
import ImagePage from "../../image/pages/image";
import LoginPage from "../../auth/pages/login";
import MenuPage from "../../menu/pages/menu";
import Layout from "../components/layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MenuPage />,
  },
  {
    path: "/admin",
    element: <Layout roles={["admin"]} />,
    children: [
      {
        path: "/admin",
        element: <MenuAdminPage />,
      },
      {
        path: "/admin/menu/create",
        element: <MenuCreatePage />,
      },
      {
        path: "/admin/menu/edit/:id",
        element: <MenuEditPage />,
      },
      {
        path: "/admin/image",
        element: <ImagePage />,
      },
      {
        path: "/admin/category",
        element: <CategoryPage />,
      },
    ],
  },

  {
    path: "/auth/login",
    element: <LoginPage />,
  },
]);

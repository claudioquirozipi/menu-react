import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import MenuCreatePage from "./menu/pages/menuCreate";
import CategoryPage from "./category/pages/category";
import MenuAdminPage from "./menu/pages/menuAdmin";
import MenuEditPage from "./menu/pages/menuEdit";
import ImagePage from "./image/pages/image";
import LoginPage from "./auth/pages/login";
import MenuPage from "./menu/pages/menu";

import "primereact/resources/themes/vela-purple/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css";
import "./App.css";

function App() {
  const queryClient = new QueryClient();
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MenuPage />,
    },
    {
      path: "/admin",
      element: <MenuAdminPage />,
    },
    {
      path: "/admin/create",
      element: <MenuCreatePage />,
    },
    {
      path: "/admin/edit/:id",
      element: <MenuEditPage />,
    },
    {
      path: "admin/image",
      element: <ImagePage />,
    },
    {
      path: "admin/category",
      element: <CategoryPage />,
    },
    {
      path: "/auth/login",
      element: <LoginPage />,
    },
  ]);
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </div>
  );
}

export default App;

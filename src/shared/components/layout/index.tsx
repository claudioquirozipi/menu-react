import { Outlet, useNavigate } from "react-router-dom";

import { LayoutProps } from "./interfaces/props";
import { supabase } from "../../../App";

import { MenuItem } from "primereact/menuitem/menuitem";
import { Menubar } from "primereact/menubar";
import { Button } from "primereact/button";

export default function Layout(props: LayoutProps) {
  const navigate = useNavigate();
  async function signOut() {
    await supabase.auth.signOut();
  }
  supabase.auth.onAuthStateChange((event, session) => {
    if (event === "SIGNED_OUT") {
      navigate("/auth/login");
    }
  });

  const items: MenuItem[] = [
    {
      label: "menu",
      items: [
        {
          label: "Home",
          command: () => {
            navigate("/");
          },
        },
        {
          label: "Menu",
          command: () => {
            navigate("/admin/");
          },
        },
        {
          label: "Categorias",
          command: () => {
            navigate("/admin/category");
          },
        },
        {
          label: "Imagenes",
          command: () => {
            navigate("/admin/image");
          },
        },
      ],
    },
  ];
  return (
    <div>
      <Menubar
        model={items}
        end={<Button onClick={signOut} label="Logout" icon="pi pi-power-off" />}
      />
      <Outlet />
    </div>
  );
}

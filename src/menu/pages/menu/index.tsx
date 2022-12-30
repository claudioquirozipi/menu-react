import { useMenuList } from "../../hooks/useMenuList";
import CardMenu from "../../components/card";
import "./style.css";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

export default function MenuPage() {
  const { menus, menuIsLoading, menuError } = useMenuList();

  const queryClient = useQueryClient();
  if (menuIsLoading) return <h1>Cargando ...</h1>;
  return (
    <div>
      <h1>Menú items</h1>
      <ul className="container">
        {menus?.map((menu) => (
          <CardMenu key={menu.id} menu={menu} />
        ))}
      </ul>
    </div>
  );
}

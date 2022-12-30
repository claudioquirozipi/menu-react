import { munuService } from "../services";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

export function useMenuList() {
  const { data, error, isLoading } = useQuery(
    ["menu"],
    () => munuService.menuList
  );
  return {
    menus: data,
    menuError: error,
    menuIsLoading: isLoading,
  };
}

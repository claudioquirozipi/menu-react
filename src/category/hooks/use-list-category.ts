import { useQuery } from "@tanstack/react-query";

import { categoryService } from "../services";
import { key } from ".";

export function useCategoryList() {
  return useQuery(key, () => categoryService.list());
}

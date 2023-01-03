import { useMutation, useQueryClient } from "@tanstack/react-query";

import { CategoryEditDTO } from "../interfaces/categoryEditDTO";
import { categoryService } from "../services";
import { key } from ".";

export function useCategoryEdit(categoryEditDTO: CategoryEditDTO) {
  const queryClient = useQueryClient();
  return useMutation(() => categoryService.edit(categoryEditDTO), {
    onSuccess: () => {
      queryClient.invalidateQueries(key);
    },
  });
}

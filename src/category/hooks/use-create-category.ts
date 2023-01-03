import { useMutation, useQueryClient } from "@tanstack/react-query";

import { CategoryCreateDTO } from "../interfaces/categoryCreateDTO";
import { categoryService } from "../services";
import { key } from ".";

export function useCategoryCreate(categoryCreateDTO: CategoryCreateDTO) {
  const queryClient = useQueryClient();
  return useMutation(() => categoryService.create(categoryCreateDTO), {
    onSuccess: () => {
      queryClient.invalidateQueries(key);
    },
  });
}

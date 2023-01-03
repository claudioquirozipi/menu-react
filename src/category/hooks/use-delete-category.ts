import { useMutation, useQueryClient } from "@tanstack/react-query";

import { categoryService } from "../services";
import { key } from ".";

export function useCategoryDelete(id: string) {
  const queryClient = useQueryClient();
  return useMutation(() => categoryService.delete(id), {
    onSuccess: () => {
      queryClient.invalidateQueries(key);
    },
  });
}

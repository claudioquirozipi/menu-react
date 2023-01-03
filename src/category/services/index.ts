import { CategoryCreateDTO } from "../interfaces/categoryCreateDTO";
import { CategoryEditDTO } from "../interfaces/categoryEditDTO";
import { Category } from "../interfaces/category";
import { instance } from "../../shared/services";

export const categoryService = {
  list: () => instance.get<Category[]>("/category?select=*"),
  create: (categoryCreateDTO: CategoryCreateDTO) =>
    instance.post("/category", categoryCreateDTO),
  edit: (categoryEditDTO: CategoryEditDTO) =>
    instance.patch(`/category?id=eq.${categoryEditDTO.id}`, categoryEditDTO),
  delete: (categoryId: string) =>
    instance.delete(`/category?id=eq.${categoryId}`),
};

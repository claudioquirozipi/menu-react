import { Button } from "primereact/button";

import { EditCategoryProps } from "./interfaces/props";
import { useCategoryEdit } from "../../hooks";

export const EditCategory = (props: EditCategoryProps) => {
  const { categoryEditDTO } = props;
  const element = {
    name: categoryEditDTO.name + " editado",
    id: categoryEditDTO.id,
  };
  const { mutate } = useCategoryEdit(element);
  const handleOnClick = () => {
    mutate();
  };
  return <Button label="Editar" onClick={handleOnClick} />;
};

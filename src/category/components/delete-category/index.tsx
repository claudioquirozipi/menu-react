import { Button } from "primereact/button";

import { DeleteCategoryProps } from "./interfaces/props";
import { useCategoryDelete } from "../../hooks";

export default function DeleteCategory(props: DeleteCategoryProps) {
  const { id } = props;
  const { mutate } = useCategoryDelete(id);

  const handleOnClick = () => {
    mutate();
  };

  return <Button label="Borrar" onClick={handleOnClick} />;
}

import { useState } from "react";

import { InputText } from "primereact/inputtext";
import { Toolbar } from "primereact/toolbar";
import { Button } from "primereact/button";

import { useCategoryCreate } from "../../hooks";

export default function CreateCategory() {
  const [newCategory, setNewCategory] = useState("");

  const { mutate } = useCategoryCreate({ name: newCategory });
  const handleOnSubmit = async () => {
    mutate();
  };
  return (
    <div>
      <Toolbar
        className="mb-4"
        right={
          <>
            {newCategory}
            <InputText
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
            />
            <Button
              label="New"
              icon="pi pi-plus"
              className="p-button-success mr-2"
              onClick={handleOnSubmit}
            />
          </>
        }
      ></Toolbar>
    </div>
  );
}

import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

import CreateCategory from "../components/create-category";
import DeleteCategory from "../components/delete-category";
import { EditCategory } from "../components/edit-category";
import { useCategoryList } from "../hooks";

export default function CategoryPage() {
  const { data, isLoading } = useCategoryList();

  return (
    <div>
      <CreateCategory />
      {isLoading && <h1>Cargando ...</h1>}
      <DataTable value={data?.data}>
        <Column
          field="name"
          header="Name"
          sortable
          style={{ minWidth: "16rem" }}
        />
        <Column
          body={(rowData) => <EditCategory categoryEditDTO={rowData} />}
        ></Column>
        <Column
          field="id"
          body={(rowData) => <DeleteCategory id={rowData.id} />}
        ></Column>
      </DataTable>
    </div>
  );
}

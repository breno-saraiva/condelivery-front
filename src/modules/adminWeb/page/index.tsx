import { DataTable } from "@/shared/components/dataTable";
import { Layout } from "@/shared/components/layout";
import { columnsMoradores } from "../components/columnsMoradores";
import { moradoresUsua } from "../mocks/moradores";
import { usePagination } from "@/shared/hooks/pagination/usePagination";

function AdministradorWebPage() {
  const { handleNextPage, handlePreviousPage, handleSelectPerPage, pageInfo } =
    usePagination();

  return (
    <Layout usuario="Síndico">
      <div>
        <h1 className="text-xl font-bold">Moradores</h1>
        <DataTable
          columns={columnsMoradores}
          data={moradoresUsua}
          handleNextPage={handleNextPage}
          handlePreviousPage={handlePreviousPage}
          handleSelectPerPage={handleSelectPerPage}
          pageInfo={pageInfo.value}
        />
      </div>
    </Layout>
  );
}

export { AdministradorWebPage };

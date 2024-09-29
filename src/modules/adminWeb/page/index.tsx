import { DataTable } from "@/shared/components/dataTable";
import { Layout } from "@/shared/components/layout";
import { columnsMoradores } from "../components/columnsMoradores";
import { moradoresUsua } from "../mocks/moradores";
import { usePagination } from "@/shared/hooks/pagination/usePagination";
import { Button } from "@/shared/components/ui/button";
import { useState } from "react";
import { DialogAddMorador } from "../components/dialogAddMorador";
import { ActionButton } from "@/shared/components/types/ActionButton";
import { moradores } from "../types/moradores";
import { MdModeEdit } from "react-icons/md";
import { FaTrashAlt } from "react-icons/fa";
import { DialogEditMorador } from "../components/dialogEditMorador";
import { DialogExcludeMorador } from "../components/dialogExcludeMorador";

function AdministradorWebPage() {
  const [openDialogAddMorador, setOpenDialogAddMorador] = useState(false);
  const [openDialogEditMorador, setOpenDialogEditMorador] = useState(false);
  const [openDialogExclude, setOpenDialogExclude] = useState(false);
  const [moradorSelected, setMoradorSelected] = useState<moradores>();

  const { handleNextPage, handlePreviousPage, handleSelectPerPage, pageInfo } =
    usePagination();

  const actionsMoradores: ActionButton[] = [
    {
      label: "Editar Empresa",
      icon: <MdModeEdit />,
      onClick: (row: moradores) => {
        setMoradorSelected((prev) => {
          return {
            ...prev,
            id: row.id,
            nome: row.nome,
            cpf: row.cpf,
            telefone: row.telefone,
            email: row.email,
            date_nasc: row.date_nasc,
            logradouro: row.logradouro,
          };
        });
        setOpenDialogEditMorador(true);
      },
    },
    {
      label: "Excluir Empresa",
      icon: <FaTrashAlt className="text-red-500" />,
      onClick: (row: moradores) => {
        setMoradorSelected((prev) => {
          return {
            ...prev,
            id: row.id,
            nome: row.nome,
            cpf: row.cpf,
            telefone: row.telefone,
            email: row.email,
            date_nasc: row.date_nasc,
            logradouro: row.logradouro,
          };
        });
        setOpenDialogExclude(true);
      },
    },
  ];

  console.log(moradorSelected);

  return (
    <Layout usuario="Síndico">
      <div className="p-32 flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-[#F48C06]">Moradores</h1>
          <Button
            onClick={() => setOpenDialogAddMorador(true)}
            variant="default"
            className="bg-red-500 hover:bg-red-400"
          >
            Adicionar Morador
          </Button>
        </div>
        <DataTable
          columns={columnsMoradores}
          data={moradoresUsua}
          actionButtons={actionsMoradores}
          handleNextPage={handleNextPage}
          handlePreviousPage={handlePreviousPage}
          handleSelectPerPage={handleSelectPerPage}
          pageInfo={pageInfo.value}
        />
      </div>
      {openDialogAddMorador && (
        <DialogAddMorador
          isOpen={openDialogAddMorador}
          onCLose={() => setOpenDialogAddMorador(false)}
        />
      )}
      {openDialogEditMorador && (
        <DialogEditMorador
          moradorSelected={moradorSelected}
          isOpen={openDialogEditMorador}
          onCLose={() => setOpenDialogEditMorador(false)}
        />
      )}
      {openDialogExclude && (
        <DialogExcludeMorador
          isOpen={openDialogExclude}
          onCLose={() => setOpenDialogExclude(false)}
          moradorSelected={moradorSelected}
          setOpenDialogExclude={setOpenDialogExclude}
        />
      )}
    </Layout>
  );
}

export { AdministradorWebPage };

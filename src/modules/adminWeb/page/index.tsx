import { DataTable } from "@/shared/components/dataTable";
import { Layout } from "@/shared/components/layout";
import { columnsMoradores } from "../components/columnsMoradores";
import { usePagination } from "@/shared/hooks/pagination/usePagination";
import { Button } from "@/shared/components/ui/button";
import { useEffect, useState } from "react";
import { DialogAddMorador } from "../components/dialogAddMorador";
import { ActionButton } from "@/shared/components/types/ActionButton";
import { MdModeEdit } from "react-icons/md";
import { FaTrashAlt } from "react-icons/fa";
import { DialogEditMorador } from "../components/dialogEditMorador";
import { DialogExcludeMorador } from "../components/dialogExcludeMorador";
import { getMoradoresService } from "../service/listMoradores/getMoradores.service";
import { ListMoradores } from "../service/listMoradores/getMoradores.dto";

function AdministradorWebPage() {
  const [openDialogAddMorador, setOpenDialogAddMorador] = useState(false);
  const [openDialogEditMorador, setOpenDialogEditMorador] = useState(false);
  const [openDialogExclude, setOpenDialogExclude] = useState(false);
  const [moradorSelected, setMoradorSelected] = useState<ListMoradores>();
  const [listMoradores, setListMoradores] = useState<ListMoradores[]>([]);

  const { handleNextPage, handlePreviousPage, handleSelectPerPage, pageInfo } =
    usePagination();

  const usua = String(localStorage.getItem("@nome_usua"));

  const actionsMoradores: ActionButton[] = [
    {
      label: "Editar Empresa",
      icon: <MdModeEdit />,
      onClick: (row: ListMoradores) => {
        setMoradorSelected((prev) => {
          return {
            ...prev,
            _id: row._id,
            nome: row.nome,
            cpf: row.cpf,
            celular: row.celular,
            email: row.email,
            data_nascimento: row.data_nascimento,
            unidade: row.unidade,
            eh_entregador: row.eh_entregador,
            senha: row.senha,
          };
        });
        setOpenDialogEditMorador(true);
      },
    },
    {
      label: "Excluir Empresa",
      icon: <FaTrashAlt className="text-red-500" />,
      onClick: (row: ListMoradores) => {
        setMoradorSelected((prev) => {
          return {
            ...prev,
            _id: row._id,
            nome: row.nome,
            cpf: row.cpf,
            celular: row.celular,
            email: row.email,
            data_nascimento: row.data_nascimento,
            unidade: row.unidade,
            eh_entregador: row.eh_entregador,
            senha: row.senha,
          };
        });
        setOpenDialogExclude(true);
      },
    },
  ];

  async function getMoradores() {
    try {
      const result = await getMoradoresService.execute();
      setListMoradores(result.moradores);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getMoradores();
  }, [openDialogAddMorador, openDialogEditMorador, openDialogExclude]);

  return (
    <Layout usuario={usua}>
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
          data={listMoradores}
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

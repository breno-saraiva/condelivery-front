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
import {
  ListMoradoresInput,
  ListMoradoresOutput,
} from "../service/listMoradores/getMoradores.dto";

function AdministradorWebPage() {
  const [openDialogAddMorador, setOpenDialogAddMorador] = useState(false);
  const [openDialogEditMorador, setOpenDialogEditMorador] = useState(false);
  const [openDialogExclude, setOpenDialogExclude] = useState(false);
  const [moradorSelected, setMoradorSelected] = useState<ListMoradoresOutput>({
    condominioId: "",
    id: "",
    nome: "",
    cpf: "",
    celular: "",
    email: "",
    dataNascimento: "",
    unidade: "",
    ehEntregador: true,
  });
  const [statusMorador, setStatusMorador] = useState(false);
  const id_usua = String(localStorage.getItem("@id_usua"));

  const [listMoradores, setListMoradores] = useState<ListMoradoresOutput[]>([]);

  const { handleNextPage, handlePreviousPage, handleSelectPerPage, pageInfo } =
    usePagination();

  const usua = String(localStorage.getItem("@nome_usua"));

  const actionsMoradores: ActionButton[] = [
    {
      label: "Editar Empresa",
      icon: <MdModeEdit />,
      onClick: (row: ListMoradoresOutput) => {
        setMoradorSelected((prev) => {
          return {
            ...prev,
            id: row.id,
            nome: row.nome,
            cpf: row.cpf,
            celular: row.celular,
            email: row.email,
            data_nascimento: row.dataNascimento,
            unidade: row.unidade,
            ehEntregador: row.ehEntregador,
          };
        });
        setStatusMorador(moradorSelected.ehEntregador);
        setOpenDialogEditMorador(true);
      },
    },
    {
      label: "Excluir Empresa",
      icon: <FaTrashAlt className="text-red-500" />,
      onClick: (row: ListMoradoresOutput) => {
        setMoradorSelected((prev) => {
          return {
            ...prev,
            id: row.id,
            nome: row.nome,
            cpf: row.cpf,
            celular: row.celular,
            email: row.email,
            data_nascimento: row.dataNascimento,
            unidade: row.unidade,
            ehEntregador: row.ehEntregador,
          };
        });
        setOpenDialogExclude(true);
      },
    },
  ];

  async function getMoradores() {
    try {
      if (id_usua) {
        const params: ListMoradoresInput = {
          condominioId: id_usua,
        };
        const result = await getMoradoresService.execute(params);
        setListMoradores(result);
      }
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
          statusMorador={statusMorador}
          setStatusMorador={setStatusMorador}
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

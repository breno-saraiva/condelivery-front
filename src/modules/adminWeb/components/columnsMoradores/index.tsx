import { ColumnDef } from "@tanstack/react-table";
import { cn } from "@/shared/lib/utils";
import { Badge } from "@/shared/components/ui/badge";
import { ListMoradores } from "../../service/listMoradores/getMoradores.dto";
import dayjs from "dayjs";

const columnsMoradores: ColumnDef<ListMoradores>[] = [
  {
    accessorKey: "nome",
    header: "Nome",
  },
  {
    accessorKey: "cpf",
    header: "CPF",
  },
  {
    accessorKey: "celular",
    header: "Telefone",
  },
  {
    accessorKey: "email",
    header: "E-mail",
  },
  {
    accessorKey: "dataNascimento",
    header: "Data de Nascimento",
    cell: ({ row }) => {
      const data = row.getValue<string>("dataNascimento");
      return <div>{dayjs(data).format("DD/MM/YYYY")}</div>;
    },
  },
  {
    accessorKey: "unidade",
    header: "Apto",
  },
  {
    accessorKey: "ehEntregador",
    header: "Tipo de Morador",
    cell: ({ row }) => {
      const status = row.getValue<boolean>("ehEntregador");
      return (
        <div className="w-full flex items-center justify-center">
          <Badge
            className={cn(
              "w-32 flex justify-center items-center",
              `${!status ? "bg-emerald-500" : "bg-orange-400"}`
            )}
          >
            <span className="text-white">
              {!status ? "morador" : "entregador"}
            </span>
          </Badge>
        </div>
      );
    },
  },
];

export { columnsMoradores };

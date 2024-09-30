import { ColumnDef } from "@tanstack/react-table";
import { cn } from "@/shared/lib/utils";
import { Badge } from "@/shared/components/ui/badge";
import { ListMoradores } from "../../service/listMoradores/getMoradores.dto";

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
    accessorKey: "data_nascimento",
    header: "Data de Nascimento",
  },
  {
    accessorKey: "unidade",
    header: "Apto",
  },
  {
    accessorKey: "eh_entregador",
    header: "Tipo de Morador",
    cell: ({ row }) => {
      const status = row.getValue<boolean>("morador_tipo");
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

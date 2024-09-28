import { ColumnDef } from "@tanstack/react-table";
import { moradores } from "../../types/moradores";
// import { cpfMask } from "@/shared/utils/masks";
import { cn } from "@/shared/lib/utils";
import { Badge } from "@/shared/components/ui/badge";

const columnsMoradores: ColumnDef<moradores>[] = [
  {
    accessorKey: "nome",
    header: "Nome",
  },
  {
    accessorKey: "cpf",
    header: "CPF",
    // cell: ({ row }) => {
    //   return cpfMask(row.getValue<string>("cnpj"));
    // },
  },
  {
    accessorKey: "telefone",
    header: "Telefone",
  },
  {
    accessorKey: "email",
    header: "E-mail",
  },
  {
    accessorKey: "date_nasc",
    header: "Data de Nascimento",
  },
  {
    accessorKey: "logradouro",
    header: "Apto",
  },
  {
    accessorKey: "morador_tipo",
    header: "Tipo de Morador",
    cell: ({ row }) => {
      const status = row.getValue<string>("morador_tipo");
      return (
        <div className="w-full flex items-center justify-center">
          <Badge
            className={cn(
              "w-32 flex justify-center items-center",
              `${status === "morador" ? "bg-emerald-500" : "bg-orange-400"}`
            )}
          >
            <span className="text-white">{status}</span>
          </Badge>
        </div>
      );
    },
  },
];

export { columnsMoradores };

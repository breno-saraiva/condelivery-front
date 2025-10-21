import { Button } from "@/shared/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/shared/components/ui/dialog";
import { deleteMoradoresService } from "../../service/deleteMorador/deleteMorador.service";
import { ListMoradoresOutput } from "../../service/listMoradores/getMoradores.dto";

type DiaLogProp = {
  isOpen: boolean;
  onCLose: () => void;
  moradorSelected: ListMoradoresOutput;
  setOpenDialogExclude: React.Dispatch<React.SetStateAction<boolean>>;
};

const DialogExcludeMorador = ({
  isOpen,
  onCLose,
  moradorSelected,
  setOpenDialogExclude,
}: DiaLogProp) => {
  async function DeleteMorador(id: string) {
    try {
      await deleteMoradoresService.execute(id);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <Dialog open={isOpen} onOpenChange={onCLose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            Deseja excluir o Morador{" "}
            <span className="text-orange-400">{moradorSelected?.nome}</span>?
          </DialogTitle>
          <DialogDescription>
            Aperte em confirmar para excluir!
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-end items-center">
          <div className="flex gap-4">
            <DialogClose asChild>
              <Button
                type="button"
                variant="outline"
                onClick={() => setOpenDialogExclude(false)}
                className="border-green-400"
              >
                Voltar
              </Button>
            </DialogClose>
            <Button
              type="button"
              onClick={() => DeleteMorador(moradorSelected.id)}
              variant="destructive"
            >
              Confirmar
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export { DialogExcludeMorador };

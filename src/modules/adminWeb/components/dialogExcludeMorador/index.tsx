import { Button } from "@/shared/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/shared/components/ui/dialog";
import { moradores } from "../../types/moradores";

type DiaLogProp = {
  isOpen: boolean;
  onCLose: () => void;
  moradorSelected?: moradores;
  setOpenDialogExclude: React.Dispatch<React.SetStateAction<boolean>>;
};

const DialogExcludeMorador = ({
  isOpen,
  onCLose,
  moradorSelected,
  setOpenDialogExclude,
}: DiaLogProp) => {
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
            <Button variant="destructive">Confirmar</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export { DialogExcludeMorador };

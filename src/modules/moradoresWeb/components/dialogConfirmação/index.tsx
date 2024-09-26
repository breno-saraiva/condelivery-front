import { Button } from "@/shared/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/shared/components/ui/dialog";

type DiaLogProp = {
  isOpen: boolean;
  onCLose: () => void;
};

const DialogConfirmaçãoEntrega = ({ isOpen, onCLose }: DiaLogProp) => {
  return (
    <Dialog open={isOpen} onOpenChange={onCLose}>
      <DialogContent className="p-8">
        <DialogHeader>
          <DialogTitle>Deseja confirmar a entrega?</DialogTitle>
          <DialogDescription>
            Se recebeu sua entrega aperte em confirmar
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-end items-center">
          <div className="flex gap-4">
            <DialogClose asChild>
              <Button
                type="button"
                variant="outline"
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

export { DialogConfirmaçãoEntrega };

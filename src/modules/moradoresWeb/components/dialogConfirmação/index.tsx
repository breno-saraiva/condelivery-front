import { Button } from "@/shared/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/shared/components/ui/dialog";
import { editPedidoService } from "../../service/editStatusPedido/editStatus.service";

type DiaLogProp = {
  isOpen: boolean;
  onCLose: () => void;
  cardID: string;
  setIsOpenConfirmaçãoEntrega: React.Dispatch<React.SetStateAction<boolean>>;
};

const DialogConfirmaçãoEntrega = ({
  isOpen,
  onCLose,
  cardID,
  setIsOpenConfirmaçãoEntrega,
}: DiaLogProp) => {
  async function editStatus() {
    const params = {
      _id: cardID,
      status: "entregue",
    };
    try {
      await editPedidoService.execute(params);
      setIsOpenConfirmaçãoEntrega(false);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  }
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
            <Button
              type="button"
              onClick={() => editStatus()}
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

export { DialogConfirmaçãoEntrega };

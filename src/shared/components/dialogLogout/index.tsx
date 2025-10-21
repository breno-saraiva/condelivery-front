import { CiLogout } from "react-icons/ci";
import { Tooltip } from "../tooltip";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { logoutService } from "@/modules/login/service/logout/logout.service";
import { useNavigate } from "react-router-dom";

const DialogLogout = () => {
  const navigate = useNavigate();

  function Logout() {
    logoutService.execute(navigate);
  }
  return (
    <Dialog>
      <DialogTrigger>
        <Tooltip side="bottom" text="Sair">
          <button className=" text-white rounded-full p-2 hover:bg-red-300">
            <span className="text-xl">
              <CiLogout />
            </span>
          </button>
        </Tooltip>
      </DialogTrigger>
      <DialogContent className="w-[300px] rounded-xl h-36 flex justify-center items-center">
        <DialogHeader>
          <DialogTitle className="pb-4">Deseja realmente sair?</DialogTitle>
          <DialogDescription>
            <Button
              className="w-full p-4 bg-red-400 hover:bg-red-500 ease-in-out transition-all"
              onClick={Logout}
            >
              <span className="flex items-center gap-2">Confirmar</span>
            </Button>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export { DialogLogout };

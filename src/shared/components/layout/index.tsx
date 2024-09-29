import logo from "@/shared/assets/logo.svg";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

type Prop = {
  children: React.ReactNode;
  usuario?: string;
};

function Layout({ children, usuario }: Prop) {
  return (
    <div className="w-full h-screen relative bg-[#f5f5dc]">
      <header className="py-5 px-10 flex items-center justify-between bg-red-500 absolute top-0 w-full">
        <div>
          <img src={logo} alt="logomarca" />
        </div>
        {usuario ? (
          <div>
            <h1 className="text-white font-medium text-xl">
              Seja bem vindo, <span>{usuario}</span>
            </h1>
          </div>
        ) : (
          ""
        )}
      </header>
      <main className="flex-1 bg-[#f5f5dc]">{children}</main>
      <footer className="py-5 px-10 flex items-center justify-between bg-red-500 fixed bottom-0 w-full">
        <div>
          <img src={logo} alt="logomarca" />
        </div>
        <div>
          <p className="text-white">Condelivery - 2024</p>
        </div>
        <div className="flex gap-4">
          <FaInstagram className="text-4xl text-white" />
          <FaWhatsapp className="text-4xl text-white" />
        </div>
      </footer>
    </div>
  );
}
export { Layout };

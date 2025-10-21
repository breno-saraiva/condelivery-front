import { UserDataContextProvider } from "./usercontext";

const ContextProviders = ({ children }: { children: React.ReactNode }) => {
  return <UserDataContextProvider>{children}</UserDataContextProvider>;
};

export { ContextProviders };

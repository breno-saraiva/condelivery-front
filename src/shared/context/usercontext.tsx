/* eslint-disable react-refresh/only-export-components */
import { LoginOutput } from "@/modules/login/service/login/login.Dto";
import { createContext, useContext, useEffect, useState } from "react";

type UserDataContextProps = {
  user: {
    value: LoginOutput;
    setValue: (value: LoginOutput) => void;
  };
};

const UserDataContext = createContext<UserDataContextProps>(
  {} as UserDataContextProps
);

const UserDataContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [user, setUser] = useState<LoginOutput>({} as LoginOutput);

  const value: UserDataContextProps = {
    user: {
      value: user,
      setValue: setUser,
    },
  };

  function getUserData() {
    const userData = localStorage.getItem("@user_data");
    if (!userData) return;
    return JSON.parse(userData);
  }

  useEffect(() => {
    const parsedUserData = getUserData();
    if (JSON.stringify(parsedUserData) !== JSON.stringify(user)) {
      setUser(parsedUserData);
    }
  }, [user]);

  return (
    <UserDataContext.Provider value={value}>
      {children}
    </UserDataContext.Provider>
  );
};

const useUserDataContext = () => {
  return useContext(UserDataContext);
};
export { UserDataContextProvider, useUserDataContext };

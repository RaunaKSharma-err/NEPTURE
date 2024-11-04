import React, { ReactNode, useContext, useState, createContext } from "react";

type Prop = {
  islogout: boolean;
};

interface LogoutContextType {
  logout: Prop | null;
  setLogout: (logout: Prop) => void;
}

const logoutContext = createContext<LogoutContextType | undefined>(undefined);

export const LogoutProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [logout, setLogout] = useState<Prop | null>(null);
  return (
    <logoutContext.Provider value={{ logout, setLogout }}>
      {children}
    </logoutContext.Provider>
  );
};

export const useLogoutContext = () => {
  const context = useContext(logoutContext);
  if (!context) {
    throw new Error("useLogoutProvider must be used within a LogoutProvider");
  }
  return context;
};

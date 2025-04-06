"use client";

import { createContext, ReactNode, useContext } from "react";

type Store = {
  color: string;
};

const defaultStore: Store = {
  color: "#ffff",
};

const StoreContext = createContext<Store>(defaultStore);

export const StoreProvider = ({ children }: { children: ReactNode }) => {
  return (
    <StoreContext.Provider value={defaultStore}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => useContext(StoreContext);

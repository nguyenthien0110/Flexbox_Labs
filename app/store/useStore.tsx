"use client";

import { createContext, ReactNode, useContext, useState } from "react";
import { defaultStore, Grids, Store } from "../utils/type";

const StoreContext = createContext<Store>(defaultStore);

export const StoreProvider = ({ children }: { children: ReactNode }) => {
  const [grids, setGridsStore] = useState<Grids>(defaultStore.grids);
  const setGrids = (update: Partial<Grids>) => {
    setGridsStore((prev) => ({ ...prev, ...update }));
  };
  return (
    <StoreContext.Provider value={{ grids, setGrids }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => useContext(StoreContext);

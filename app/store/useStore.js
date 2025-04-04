"use client"

import { useContext } from "react";
import StoreContext from "./Context";

const useStore = () => {
  const [state, dispatch] = useContext(StoreContext);
  return [state, dispatch];
};

export default useStore;

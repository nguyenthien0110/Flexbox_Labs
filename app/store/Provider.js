"use client";
import { useReducer } from "react";
import StoreContext from "./Context";

export const initState = {
  itemMenu: "",
  state: [],
};

function reducer(state, acction) {
  switch (
    acction.type
    // logic
  ) {
  }
}

function ProviderStore({ children }) {
  const [state, dispatch] = useReducer(reducer, initState);
  return (
    <StoreContext.Provider value={[state, dispatch]}>
      {children}
    </StoreContext.Provider>
  );
}

export default ProviderStore;

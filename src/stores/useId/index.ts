import create, { SetState } from "zustand";

import { State } from "./types";

export const useCreateId = create<State>((set: SetState<State>) => {
  const setIdGlobal = (orderId: string | null) => {
    set(() => ({
      data: {
        id: orderId || "",
      },
    }));
  };

  return {
    data: {
      id: "",
    },
    setIdGlobal,
  };
});

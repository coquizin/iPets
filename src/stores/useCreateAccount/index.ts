import create, { SetState } from "zustand";

import { State } from "./types";

export const useCreateAccountScreen = create<State>((set: SetState<State>) => {
  const setCheckoutOrderId = (orderId: number | null) => {
    set(() => ({
      data: {
        orderId: orderId || 0,
      },
    }));
  };

  return {
    data: {
      orderId: 0,
    },
    setCheckoutOrderId,
  };
});

import create, { SetState } from "zustand";

import { State, AuthType } from "./types";

export const useAuthScreen = create<State>((set: SetState<State>) => {
  const setAuthScreen = (show: boolean, type: AuthType) => {
    set(() => ({
      data: {
        show,
        type,
      },
    }));
  };

  return {
    data: {
      show: false,
      type: `login`,
    },
    setAuthScreen,
  };
});

export type AuthType = "login" | "register" | `forgot_password` | ``;

export type State = {
  data: {
    show: boolean;
    type: AuthType;
  };
  setAuthScreen: (show: boolean, type: AuthType) => void;
};

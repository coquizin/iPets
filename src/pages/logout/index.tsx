import { useEffect } from "react";
import { useRouter } from "next/router";
import { useQueryClient } from "react-query";
import { removeCookie, CookieKey } from "@global-utils/cookies";

import { ROUTES } from "@configs/routes";
import Auth from "@/layouts/Auth";
import { useAuthScreen } from "@/stores/useAuth";

const Logout = () => {
  const { replace } = useRouter();
  // const queryClient = useQueryClient();
  const setAuthScreen = useAuthScreen((state) => state.setAuthScreen);

  useEffect(() => {
    removeCookie(CookieKey.JwtAuthToken);
    removeCookie(CookieKey.UserId);
    setAuthScreen(false, "");

    // queryClient.clear();

    replace(ROUTES.PRIVATE.ROOT());
  }, [replace, setAuthScreen]);

  return null;
};

Logout.Layout = Auth;

export default Logout;

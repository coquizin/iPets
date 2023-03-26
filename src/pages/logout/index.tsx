import { useEffect } from "react";
import { useRouter } from "next/router";
import { removeCookie, CookieKey } from "@global-utils/cookies";

import { ROUTES } from "@configs/routes";
import Auth from "@/layouts/Auth";
import { useAuthScreen } from "@/stores/useAuth";
import { useQueryClient } from "@tanstack/react-query";

const Logout = () => {
  const { replace } = useRouter();
  const queryClient = useQueryClient();
  const setAuthScreen = useAuthScreen((state) => state.setAuthScreen);

  useEffect(() => {
    removeCookie(CookieKey.JwtAuthToken);
    removeCookie(CookieKey.UserId);
    setAuthScreen(false, "");

    queryClient.clear();

    replace(ROUTES.PRIVATE.ROOT());
  }, [queryClient, replace, setAuthScreen]);

  return null;
};

Logout.Layout = Auth;

export default Logout;

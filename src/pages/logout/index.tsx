import { useEffect } from "react";
import { useRouter } from "next/router";
import { removeCookie, CookieKey } from "@global-utils/cookies";

import { ROUTES } from "@configs/routes";
import Auth from "@/layouts/Auth";
import { useAuthScreen } from "@/stores/useAuth";
import { useQueryClient } from "@tanstack/react-query";
import { useCreateId } from "@/stores/useId";

const Logout = () => {
  const { replace } = useRouter();
  const queryClient = useQueryClient();
  const setIdGlobal = useCreateId((state) => state.setIdGlobal);

  useEffect(() => {
    removeCookie(CookieKey.JwtAuthToken);
    removeCookie(CookieKey.UserId);
    setIdGlobal("");

    queryClient.clear();

    replace(ROUTES.PRIVATE.ROOT());
  }, [queryClient, replace, setIdGlobal]);

  return null;
};

Logout.Layout = Auth;

export default Logout;

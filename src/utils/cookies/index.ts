import { COOKIE_DOMAIN, NODE_ENV } from "@configs/environment";

export { CookieKey } from "./types";

export const readCookie = (name: string, cookies: string): string | null => {
  const cookie =
    cookies.match(`(^|;)\\s*${name}\\s*=\\s*([^;]+)`)?.pop() || null;

  return cookie;
};

export const setCookie = (name: string, value: string) => {
  const expires = new Date();
  expires.setHours(24);

  if (NODE_ENV === `production`) {
    document.cookie = `${name}=${value}; domain=${COOKIE_DOMAIN}; expires=${expires.toUTCString()}; path=/; sameSite=strict; secure;`;
  } else {
    document.cookie = `${name}=${value}; domain=${COOKIE_DOMAIN}; expires=${expires.toUTCString()}; path=/;`;
  }
};

export const removeCookie = (name: string) => {
  if (NODE_ENV === `production`) {
    document.cookie = `${name}=; domain=${COOKIE_DOMAIN}; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; sameSite=strict; secure;`;
  } else {
    document.cookie = `${name}=; domain=${COOKIE_DOMAIN}; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/;`;
  }
};

export const setCookieLong = (name: string, value: string) => {
  const expires = new Date();
  expires.setHours(720);
  if (NODE_ENV === `production`) {
    document.cookie = `${name}=${value}; domain=${COOKIE_DOMAIN}; expires=${expires.toUTCString()}; path=/; sameSite=strict; secure;`;
  } else {
    document.cookie = `${name}=${value}; domain=${COOKIE_DOMAIN}; expires=${expires.toUTCString()}; path=/;`;
  }
};

export const setCookieForever = (name: string, value: string) => {
  if (NODE_ENV === `production`) {
    document.cookie = `${name}=${value}; domain=${COOKIE_DOMAIN}; expires=${`Fri, 31 Dec 9999 23:59:59 GMT`}; path=/; sameSite=strict; secure;`;
  } else {
    document.cookie = `${name}=${value}; domain=${COOKIE_DOMAIN}; expires=${`Fri, 31 Dec 9999 23:59:59 GMT`}; path=/;`;
  }
};

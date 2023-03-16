export const API_URL = process.env.NEXT_PUBLIC_API_URL;
export const WEB_URL = process.env.NEXT_PUBLIC_WEB_URL;
export const { NODE_ENV } = process.env;
export const COOKIE_DOMAIN = process.env.NEXT_PUBLIC_COOKIE_DOMAIN;
export const IMAGE_URL = process.env.NEXT_PUBLIC_IMAGE_URL;

export const IS_DEVELOPMENT = NODE_ENV === `development`;
export const IS_TEST = NODE_ENV === `test`;
export const IS_PRODUCTION = NODE_ENV === `production`;

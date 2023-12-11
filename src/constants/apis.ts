import { ROUTES } from '.';

const { VITE_APP_BASE_URL, VITE_KAKAO_REST_API_KEY } = import.meta.env;

export const URLS = {
  BASE_URL: VITE_APP_BASE_URL,
  KAKAO_CALLBACK_URL: `${VITE_APP_BASE_URL}${ROUTES.CALLBACK_KAKAO}`,
} as const;

export const KAKAO_LOGIN_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${VITE_KAKAO_REST_API_KEY}&redirect_uri=${URLS.KAKAO_CALLBACK_URL}&response_type=code`;

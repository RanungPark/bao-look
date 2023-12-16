import axios, { AxiosResponse } from 'axios';
import { URLS } from 'src/constants';

import { IAuthStore } from './store';

export const kakaoLogin = async (code: string): Promise<AxiosResponse<IAuthStore> | undefined> => {
  try {
    const response = await axios.post(URLS.OAUTH_KAKAO, {
      authorizationCode: code,
    });
    return response.data.data;
  } catch (error) {
    console.error(error);
    return;
  }
};

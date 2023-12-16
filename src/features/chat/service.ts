import axios from 'axios';
import { URLS } from 'src/constants/apis';

import { IMessage } from './types';

interface IResponsePostMessage {
  savedUserChatId: number;
  savedAssiChatId: number[];
  messageResponse: string[];
  assiChatTime: string[];
  userChatTime: string;
}
export const postMessage = async (memberId: number, message: string): Promise<IResponsePostMessage> => {
  try {
    const response = await axios.post(`${URLS.CHAT}/${memberId}`, {
      message,
    });
    return response.data.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

interface IResponseGetMessageList {
  values: IMessage[];
  hasNext: boolean;
}
export const getMessageList = async (memberId: number, lastChatId?: number): Promise<IResponseGetMessageList> => {
  try {
    const response = await axios.get(`${URLS.CHAT_LIST}/${memberId}`, {
      params: {
        lastChatId,
      },
    });
    return response.data.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getRecentMessage = async (memberId: number) => {
  try {
    const response = await axios.get(`${URLS.CHAT_RECENT}/${memberId}`);
    return response.data.data;
  } catch (error) {
    console.error(error);
  }
};

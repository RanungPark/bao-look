import { atom, selector } from 'recoil';

import { IMessage } from './types';

interface IChatStore {
  messages: IMessage[];
  loading: boolean;
  hasNext: boolean;
}

export const chatStore = atom<IChatStore>({
  key: 'chatStore',
  default: {
    messages: [],
    loading: false,
    hasNext: false,
  },
});

export const firstChatId = selector<number>({
  key: 'firstChatId',
  get: ({ get }) => {
    const messages = get(chatStore).messages;
    return messages?.[0]?.chatId ?? 1;
  },
});

export const lastChatId = selector<number>({
  key: 'lastChatId',
  get: ({ get }) => {
    const messages = get(chatStore).messages;
    if (messages.length > 0) {
      return messages[messages.length - 1].chatId;
    }
    return 1;
  },
});

import { atom } from 'recoil';

import { IListValues } from './types';

interface IRollingPaperStore {
  messages: IListValues[];
  loading: boolean;
  hasNext: boolean;
}

export const rollingPaperStore = atom<IRollingPaperStore>({
  key: 'rollingPaperStore',
  default: {
    messages: [],
    loading: false,
    hasNext: false,
  },
});

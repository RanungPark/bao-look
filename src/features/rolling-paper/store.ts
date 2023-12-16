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
    messages: [
      {
        content: '푸바오 사랑해~',
        memberId: 2,
        randomName: '임시',
      },
      {
        content: '용인푸씨 한국에서 살게 해주세요 기도 1일차...',
        memberId: 2,
        randomName: '임시',
      },
      {
        content: '이건 푸바오 말도 들어봐야 된다',
        memberId: 3,
        randomName: '임시',
      },
      {
        content: '푸바오 사랑해 영원한 내 아기 판다 사랑해 푸바오',
        memberId: 4,
        randomName: '임시',
      },
      {
        content: '이건 푸바오 말도 들어봐야 된다',
        memberId: 5,
        randomName: '임시',
      },
      {
        content: '푸야 건강만 해라',
        memberId: 6,
        randomName: '임시',
      },
      {
        content: '알겠다 바오',
        memberId: 1,
        randomName: '임시',
      },
    ],
    loading: false,
    hasNext: false,
  },
});

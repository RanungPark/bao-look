import { atom } from 'recoil';

import { IMessage } from './types';

interface IChatStore {
  messages: IMessage[];
  loading: boolean;
}

export const chatStore = atom<IChatStore>({
  key: 'chatStore',
  default: {
    messages: [
      {
        sender: '푸바오',
        message: '안녕 나는 푸바오야! 🐼',
        date: 'Mon Dec 11 2023 22:42:08 GMT+0900',
      },
      {
        sender: 'user',
        message: '푸둥아 안에서 뭐하고 있어? 언제 나와? 나 너 보려고 오픈런했다ㅜㅜㅋㅋ 밖에 엄청 따뜻해!',
        date: 'Mon Dec 11 2023 22:13:12 GMT+0900',
      },
      {
        sender: '푸바오',
        message: '오늘은 좀 추운 것 같아서 더 잘 안 나올 것 같아...',
        date: 'Mon Dec 11 2023 22:14:12 GMT+0900',
      },
      {
        sender: 'user',
        message: '보고 싶어 푸바오...ㅜ ',
        date: 'Mon Dec 11 2023 22:15:12 GMT+0900',
      },
      {
        sender: 'user',
        message: '나 너 보려고 오픈런했다ㅜㅜㅋㅋ 밖에 엄청 따뜻해!',
        date: 'Mon Dec 11 2023 22:17:12 GMT+0900',
      },
      {
        sender: '푸바오',
        message: '그래? 그럼 좀이따 보자',
        date: 'Mon Dec 11 2023 22:18:12 GMT+0900',
      },
    ],
    loading: false,
  },
});

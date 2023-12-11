import { useEffect, useRef, useState } from 'react';

import { styled } from 'styled-components';

import BaoMessage from './BaoMessage';
import UserMessage from './UserMessage';

const Messages = () => {
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const [scrollHeight, setScrollHeight] = useState(0);

  const messages = [
    { message: 'hi', sender: 'bao' },
    {
      message: '푸둥아 안에서 뭐하고 있어? 언제 나와? 나 너 보려고 오픈런했다ㅜㅜㅋㅋ 밖에 엄청 따뜻해!',
      sender: 'user',
    },
    { message: '러바오는 벌써 나옴!', sender: 'user' },
    { message: '오늘 늦잠잤바오ㅜ', sender: 'bao' },
    { message: '오늘 좀 있다 나갈거바오', sender: 'bao' },
    {
      message: '푸둥아 안에서 뭐하고 있어? 언제 나와? 나 너 보려고 오픈런했다ㅜㅜㅋㅋ 밖에 엄청 따뜻해!',
      sender: 'user',
    },
    {
      message: '푸둥아 안에서 뭐하고 있어? 언제 나와? 나 너 보려고 오픈런했다ㅜㅜㅋㅋ 밖에 엄청 따뜻해!',
      sender: 'user',
    },
    {
      message: '푸둥아 안에서 뭐하고 있어? 언제 나와? 나 너 보려고 오픈런했다ㅜㅜㅋㅋ 밖에 엄청 따뜻해!',
      sender: 'user',
    },
    {
      message: '푸둥아 안에서 뭐하고 있어? 언제 나와? 나 너 보려고 오픈런했다ㅜㅜㅋㅋ 밖에 엄청 따뜻해!',
      sender: 'user',
    },
    {
      message: '푸둥아 안에서 뭐하고 있어? 언제 나와? 나 너 보려고 오픈런했다ㅜㅜㅋㅋ 밖에 엄청 따뜻해!',
      sender: 'user',
    },
    {
      message: '푸둥아 안에서 뭐하고 있어? 언제 나와? 나 너 보려고 오픈런했다ㅜㅜㅋㅋ 밖에 엄청 따뜻해!',
      sender: 'user',
    },
    {
      message: '푸둥아 안에서 뭐하고 있어? 언제 나와? 나 너 보려고 오픈런했다ㅜㅜㅋㅋ 밖에 엄청 따뜻해!',
      sender: 'user',
    },
    {
      message: '오늘 늦잠잤바오ㅜ 늦잠잤바오ㅜ늦잠잤바오ㅜ늦잠잤바오ㅜ늦잠잤바오ㅜ늦잠잤바오ㅜ늦잠잤바오ㅜ늦잠잤바오ㅜ',
      sender: 'bao',
    },
  ];

  // 메시지 생길때마다 스크롤다운
  useEffect(() => {
    if (!messagesContainerRef.current) {
      return;
    }
    messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
  }, [messages.length]);

  // 이전 메시지 불러올때, 스크롤 높이 유지
  useEffect(() => {
    if (!messagesContainerRef) {
      return;
    }

    if (messagesContainerRef.current) {
      const scrollTop = messagesContainerRef.current.scrollHeight - scrollHeight;
      messagesContainerRef.current.scrollTop = scrollTop;
      setScrollHeight(messagesContainerRef.current.scrollHeight);
    }
  }, [messages.length, scrollHeight]);

  return (
    <Layout ref={messagesContainerRef}>
      {messages.map((message, index: number) => {
        if (message.sender === 'bao') {
          return <BaoMessage message={message.message} key={index} />;
        }
        return <UserMessage message={message.message} key={index} />;
      })}
    </Layout>
  );
};

export default Messages;

const Layout = styled.div`
  width: 100%;
  height: calc(100% - 80px);
  padding: 1rem 1.2rem;
  gap: 0.6rem;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`;

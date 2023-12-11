import React from 'react';

import styled from 'styled-components';

import ROtherMassage from './ROtherMassage';
import RUserMassage from './RUserMassage';

const RMessages = () => {
  const messages = [
    { message: '푸바오 사랑해~', sender: 'outherUser1', nickName: '닉네임' },
    {
      message: '용인푸씨 한국에서 살게 해주세요 기도 1일차...',
      sender: 'outerUser1',
      nickName: '닉네임',
    },
    { message: '이건 푸바오 말도 들어봐야 된다', sender: 'outerUser2', nickName: '닉네임' },
    { message: '푸바오 사랑해 영원한 내 아기 판다 사랑해 푸바오', sender: 'outerUser3', nickName: '닉네임' },
    { message: '이건 푸바오 말도 들어봐야 된다', sender: 'outerUser4', nickName: '닉네임' },
    {
      message: '푸야 건강만 해라',
      sender: 'outerUser5',
      nickName: '닉네임',
    },
    {
      message: '알겠다 바오',
      sender: 'user',
      nickName: '닉네임',
    },
  ];

  return (
    <Layout>
      {messages.map((message, index: number) => {
        if (message.sender === 'user') {
          return <RUserMassage message={message.message} key={index} />;
        }
        return <ROtherMassage message={message.message} nickName={message.nickName} key={index} />;
      })}
    </Layout>
  );
};

export default RMessages;

const Layout = styled.div`
  height: calc(100% - 80px);
  width: 100%;
  padding: 0 16px;
  gap: 25px;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`;

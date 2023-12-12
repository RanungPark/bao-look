import { useEffect, useRef, useState } from 'react';

import { useRecoilValue } from 'recoil';
import { Spinner } from 'src/common/ui';
import { COLORS } from 'src/constants';
import { styled } from 'styled-components';

import BaoMessage from './BaoMessage';
import { chatStore } from './store';
import UserMessage from './UserMessage';
import useObserver from '../../common/useObserver';

const Messages = () => {
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const [scrollHeight, setScrollHeight] = useState(0);
  const infiniteContainerRef = useObserver(() => moreDataHandler());
  const chatState = useRecoilValue(chatStore);

  const moreDataHandler = () => {
    console.log('moreDataHandler');
    // if (hasNextPage) {
    //   return fetchNextPage();
    // }
  };

  useEffect(() => {
    if (!messagesContainerRef.current) {
      return;
    }

    if (scrollHeight) {
      const scrollTop = messagesContainerRef.current.scrollHeight - scrollHeight;
      messagesContainerRef.current.scrollTop = scrollTop;
      setScrollHeight(messagesContainerRef.current.scrollHeight);
    } else {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }
  }, [chatState.messages, scrollHeight]);

  return (
    <Layout>
      <Spinner loading={chatState.loading} />
      <MassagesLayout ref={messagesContainerRef}>
        {!chatState.loading && <InfinityContainer ref={infiniteContainerRef} />}
        {chatState.messages.map((message, index: number) => {
          if (message.sender === '푸바오') {
            return <BaoMessage message={message} key={index} />;
          }
          return <UserMessage message={message} key={index} />;
        })}
      </MassagesLayout>
    </Layout>
  );
};

export default Messages;

const Layout = styled.div`
  width: 100%;
  height: calc(100% - 80px);
  padding: 0 0.2rem;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const MassagesLayout = styled.div`
  padding: 1rem;
  padding-bottom: 0.4rem;
  gap: 0.6rem;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background: ${COLORS.PRIMARY_400};
    border-radius: 6px;
  }
`;

const InfinityContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 1px;
`;

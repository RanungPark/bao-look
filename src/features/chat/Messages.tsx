import { useEffect, useRef, useState } from 'react';

import { useRecoilState, useRecoilValue } from 'recoil';
import { Spinner } from 'src/common/ui';
import { COLORS } from 'src/constants';
import { styled } from 'styled-components';

import BaoMessage from './BaoMessage';
import { getMessageList } from './service';
import { chatStore, firstChatId } from './store';
import UserMessage from './UserMessage';
import useObserver from '../../common/useObserver';
import { authStore } from '../auth/store';

const Messages = () => {
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const [scrollHeight, setScrollHeight] = useState(0);
  const infiniteContainerRef = useObserver(() => moreDataHandler());
  const [chatState, setChatState] = useRecoilState(chatStore);
  const { memberId } = useRecoilValue(authStore);
  const firstChatIdState = useRecoilValue(firstChatId);

  const moreDataHandler = () => {
    if (!messagesContainerRef.current) {
      return;
    }
    if (chatState.hasNext) {
      setScrollHeight(messagesContainerRef.current.scrollHeight);
      setChatState(prev => ({ ...prev, loading: true }));
      getMessageList(memberId, firstChatIdState)
        .then(res => {
          if (!res) {
            return;
          }
          setChatState(prev => ({
            ...prev,
            messages: [...res.values.slice().reverse(), ...prev.messages],
            hasNext: res.hasNext,
          }));
        })
        .finally(() => {
          setChatState(prev => ({ ...prev, loading: false }));
        });
    }
  };

  useEffect(() => {
    if (!messagesContainerRef.current) {
      return;
    }
    if (scrollHeight) {
      const scrollTop = messagesContainerRef.current.scrollHeight - scrollHeight;
      messagesContainerRef.current.scrollTop = scrollTop;
      setScrollHeight(0);
    }
    messagesContainerRef.current.scrollHeight - messagesContainerRef.current.clientHeight;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chatState.messages.length]);

  useEffect(() => {
    setChatState(prev => ({ ...prev, loading: true }));
    getMessageList(memberId).then(res => {
      if (!res) {
        return;
      }
      setChatState(prev => ({
        ...prev,
        messages: res.values.slice().reverse(),
        hasNext: res.hasNext,
      }));
    });
    setChatState(prev => ({ ...prev, loading: false }));
  }, [memberId, setChatState]);

  return (
    <Layout>
      <Spinner loading={chatState.loading} />
      <MassagesLayout ref={messagesContainerRef}>
        {!chatState.loading && <InfinityContainer ref={infiniteContainerRef} />}
        {chatState.messages.map((message, index: number) => {
          if (message.role === 'assistant') {
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

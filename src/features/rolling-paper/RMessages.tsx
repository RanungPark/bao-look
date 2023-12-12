import { useEffect, useRef, useState } from 'react';

import { useRecoilValue } from 'recoil';
import { Spinner } from 'src/common/ui';
import { COLORS } from 'src/constants';
import styled from 'styled-components';

import ROtherMassage from './ROtherMassage';
import RUserMassage from './RUserMassage';
import { rollingPaperStore } from './store';
import useObserver from '../../common/useObserver';

const RMessages = () => {
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const [scrollHeight, setScrollHeight] = useState(0);
  const infiniteContainerRef = useObserver(() => moreDataHandler());
  const rollingPaperState = useRecoilValue(rollingPaperStore);

  const moreDataHandler = () => {
    console.log('moreDataHandler');
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
  }, [rollingPaperState.messages, scrollHeight]);

  return (
    <Layout>
      <Spinner loading={rollingPaperState.loading} />
      <MassagesLayout ref={messagesContainerRef}>
        {!rollingPaperState.loading && <InfinityContainer ref={infiniteContainerRef} />}
        {rollingPaperState.messages.map((message, index: number) => {
          if (message.sender === 'user') {
            return <RUserMassage message={message} key={index} />;
          }
          return <ROtherMassage message={message} key={index} />;
        })}
      </MassagesLayout>
    </Layout>
  );
};

export default RMessages;

const Layout = styled.div`
  height: calc(100% - 80px);
  width: 100%;
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
    width: 7px;
  }
  &::-webkit-scrollbar-thumb {
    background: ${COLORS.SECONDARY_200};
    border-radius: 6px;
  }
`;

const InfinityContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 1px;
`;

import { useEffect, useRef, useState } from 'react';

import axios, { AxiosResponse } from 'axios';
import { useRecoilState, useRecoilValue } from 'recoil';
import { Spinner } from 'src/common/ui';
import { COLORS, URLS } from 'src/constants';
import styled from 'styled-components';

import ROtherMassage from './ROtherMassage';
import RUserMassage from './RUserMassage';
import { IGetRollingPaperList } from './service';
// import { getRollingPaperLast, getRollingPaperList } from './service';
import { rollingPaperStore } from './store';
import useObserver from '../../common/useObserver';
import { authStore } from '../auth/store';

const RMessages = () => {
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const [scrollHeight, setScrollHeight] = useState(0);
  const infiniteContainerRef = useObserver(() => moreDataHandler());
  const [rollingPaperState, setRollingPaperState] = useRecoilState(rollingPaperStore);
  // const [lastId, setLastId] = useState(0);
  const { memberId } = useRecoilValue(authStore);

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
      setScrollHeight(0);
    }
    messagesContainerRef.current.scrollHeight - messagesContainerRef.current.clientHeight;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rollingPaperState.messages.length]);

  useEffect(() => {
    axios
      .get(URLS.ROLLING_PAPER_LIST)
      .then(function (response: AxiosResponse<IGetRollingPaperList>) {
        console.log(response.data);
        setRollingPaperState(prev => ({
          ...prev,
          messages: [...response.data.data.values.slice().reverse()],
        }));
      })
      .catch(function (error) {
        console.log(error.response);
      });
  }, [setRollingPaperState]);

  return (
    <Layout>
      <Spinner loading={rollingPaperState.loading} />
      <MassagesLayout ref={messagesContainerRef}>
        {!rollingPaperState.loading && <InfinityContainer ref={infiniteContainerRef} />}
        {rollingPaperState.messages.map((message, index: number) => {
          if (message.memberId === memberId) {
            return <RUserMassage message={message} key={index} />;
          }
          if (index !== 0 && rollingPaperState.messages[index - 1].memberId === message.memberId) {
            return <ROtherMassage message={message} key={index} sameUser={true} />;
          }
          return <ROtherMassage message={message} key={index} sameUser={false} />;
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

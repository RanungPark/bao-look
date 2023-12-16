import FUBAO_PROFILE from 'src/assets/img/bao-profile.jpg';
import { COLORS } from 'src/constants';
import { styled } from 'styled-components';

import { IMessage } from './types';

const BaoMessage = ({ message: { message, chatTime } }: { message: IMessage }) => {
  return (
    <Layout>
      <BaoProfile>
        <img src={FUBAO_PROFILE} alt="fubao_profile" />
      </BaoProfile>
      <div>
        <BaoName>{'푸바오'}</BaoName>
        <MessageLayout>{message}</MessageLayout>
      </div>
      <Time>{chatTime}</Time>
    </Layout>
  );
};

export default BaoMessage;

const Layout = styled.div`
  align-self: flex-start;
  display: flex;
  gap: 0.4rem;
`;

const BaoProfile = styled.div`
  width: 34px;
  height: 34px;
  border-radius: 50%;
  overflow: hidden;
  background-color: ${COLORS.GRAY_500};
`;

const BaoName = styled.div`
  font-size: 14px;
  padding-bottom: 2px;
`;

const MessageLayout = styled.div`
  padding: 8px 15px;
  max-width: 16em;
  background-color: ${COLORS.PRIMARY_500};
  color: ${COLORS.PRIMARY_800};
  border-radius: 0px 18px 18px 18px;
  border: 1px solid ${COLORS.PRIMARY_700};
  word-wrap: break-all;
  font-size: 15px;
`;

const Time = styled.div`
  align-self: flex-end;
  color: ${COLORS.DARK};
  opacity: 0.4;
  font-size: 11px;
`;

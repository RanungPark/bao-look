import { COLORS } from 'src/constants';
import styled from 'styled-components';

import { IRMessage } from './types';
import { formatTime } from '../chat/utils';

const ROtherMassage = ({ message: { message, nickName, date } }: { message: IRMessage }) => {
  return (
    <Layout>
      <Profile>
        <Image src="" alt="프로필 이미지" />
      </Profile>
      <MessageLayout>
        <NicKNmae>{nickName}</NicKNmae>
        <Message>{message}</Message>
      </MessageLayout>
      <Time>{formatTime(date)}</Time>
    </Layout>
  );
};

export default ROtherMassage;

const Layout = styled.div`
  align-self: flex-start;
  display: flex;
  gap: 0.4rem;
`;

const Profile = styled.div`
  width: 34px;
  height: 34px;
  background-color: ${COLORS.GRAY_500};
  border-radius: 50%;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`;

const MessageLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
`;

const NicKNmae = styled.div`
  font-size: 14px;
  padding-bottom: 2px;
`;

const Message = styled.div`
  padding: 8px 15px;
  max-width: 16em;
  background-color: ${COLORS.SECONDARY_300};
  color: ${COLORS.SECONDARY_800};
  border: 1px solid ${COLORS.SECONDARY_600};
  border-radius: 0px 18px 18px;
  word-wrap: break-all;
  font-size: 15px;
`;

const Time = styled.div`
  align-self: flex-end;
  color: ${COLORS.DARK};
  opacity: 0.4;
  font-size: 11px;
`;

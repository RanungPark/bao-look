import { COLORS } from 'src/constants';
import { styled } from 'styled-components';

import { IMessage } from './types';

const UserMessage = ({ message: { chatTime, message } }: { message: IMessage }) => {
  return (
    <Layout>
      <Time>{chatTime}</Time>
      <MessageLayout>{message}</MessageLayout>
    </Layout>
  );
};

export default UserMessage;

const Layout = styled.div`
  align-self: flex-end;
  display: flex;
  align-items: end;
  gap: 0.4rem;
`;

const MessageLayout = styled.div`
  padding: 8px 15px;
  max-width: 16em;
  background-color: ${COLORS.SECONDARY_500};
  color: ${COLORS.SECONDARY_800};
  border-radius: 18px 0px 18px 18px;
  border: 1px solid ${COLORS.SECONDARY_700};
  word-wrap: break-all;
  font-size: 15px;
`;

const Time = styled.div`
  color: ${COLORS.DARK};
  opacity: 0.4;
  font-size: 11px;
`;

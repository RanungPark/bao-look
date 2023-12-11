import { COLORS } from 'src/constants';
import { styled } from 'styled-components';

const UserMessage = ({ message }: { message: string }) => {
  return (
    <Layout>
      <Time>10:11</Time>
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
  padding: 0.8rem 1rem 0.8rem 1.3rem;
  max-width: 16em;
  background-color: ${COLORS.GRAY_500};
  color: ${COLORS.WHITE};
  border-radius: 1.5rem 0px 1.5rem 1.5rem;
  word-wrap: break-word;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
`;

const Time = styled.div`
  color: ${COLORS.DARK};
  opacity: 0.4;
  font-size: 11px;
`;

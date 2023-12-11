import { COLORS } from 'src/constants';
import { styled } from 'styled-components';

const BaoMessage = ({ message }: { message: string }) => {
  return (
    <Layout>
      <MessageLayout>{message}</MessageLayout>
      <Time>10:11</Time>
    </Layout>
  );
};

export default BaoMessage;

const Layout = styled.div`
  align-self: flex-start;
  display: flex;
  align-items: end;
  gap: 0.4rem;
`;

const MessageLayout = styled.div`
  padding: 0.8rem 1rem 0.8rem 1rem;
  max-width: 16em;
  background-color: ${COLORS.GRAY_500};
  color: ${COLORS.WHITE};
  border-radius: 0px 1.5rem 1.5rem 1.5rem;
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

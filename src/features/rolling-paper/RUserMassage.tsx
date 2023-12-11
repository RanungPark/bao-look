import { COLORS } from 'src/constants';
import styled from 'styled-components';

const RUserMassage = ({ message }: { message: string }) => {
  return (
    <Layout>
      <Message>{message}</Message>
    </Layout>
  );
};

export default RUserMassage;

const Layout = styled.div`
  display: flex;
  align-self: flex-end;
  align-items: end;
`;

const Message = styled.div`
  padding: 8px 15px;
  max-width: 16em;
  background-color: ${COLORS.SECONDARY_500};
  color: ${COLORS.SECONDARY_800};
  border: 1px solid ${COLORS.SECONDARY_700};
  border-radius: 18px 0px 18px 18px;
`;

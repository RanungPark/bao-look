import { COLORS } from 'src/constants';
import styled from 'styled-components';

const ROtherMassage = ({ message, nickName }: { message: string; nickName: string }) => {
  return (
    <Layout>
      <Profile>
        <Image src="" alt="프로필 이미지" />
      </Profile>
      <MessageLayout>
        <NicKNmae>{nickName}</NicKNmae>
        <Message>{message}</Message>
      </MessageLayout>
    </Layout>
  );
};

export default ROtherMassage;

const Layout = styled.div`
  display: flex;
  gap: 7px;
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

const NicKNmae = styled.div``;

const Message = styled.div`
  padding: 8px 15px;
  max-width: 16em;
  background-color: ${COLORS.SECONDARY_300};
  color: ${COLORS.SECONDARY_800};
  border: 1px solid ${COLORS.SECONDARY_600};
  border-radius: 0px 18px 18px;
`;

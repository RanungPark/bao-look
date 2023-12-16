import USER_PROFILE from 'src/assets/img/user-profile.jpg';
import { COLORS } from 'src/constants';
import styled from 'styled-components';

import { IListValues } from './types';

const ROtherMassage = ({ message: { content, randomName }, sameUser }: { message: IListValues; sameUser: boolean }) => {
  return (
    <Layout>
      {sameUser ? (
        <Profile></Profile>
      ) : (
        <Profile>
          <Image src={USER_PROFILE} alt="프로필 이미지" />
        </Profile>
      )}

      <MessageLayout>
        {!sameUser && <NicKNmae>{randomName}</NicKNmae>}
        <Message>{content}</Message>
      </MessageLayout>
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

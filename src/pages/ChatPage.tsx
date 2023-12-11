import { useNavigate } from 'react-router-dom';
import PREV_ICON from 'src/assets/icon/prev.svg';
import { COLORS } from 'src/constants';
import { MessageInput, Messages } from 'src/features/chat';
import { styled } from 'styled-components';

function ChatPage() {
  const navigate = useNavigate();

  const moveBackPage = () => {
    navigate(-1);
  };

  return (
    <div>
      <PageHeader>
        <BackButton onClick={moveBackPage}>
          <img src={PREV_ICON} alt="prev_icon" />
        </BackButton>
        <Title>푸바오와 채팅</Title>
        <Profile>
          <Image src="" alt="profile_img" />
          <StateBox></StateBox>
        </Profile>
      </PageHeader>
      <PageBody>
        <Messages />
        <MessageInput />
      </PageBody>
    </div>
  );
}

export default ChatPage;

const PageHeader = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  padding: 0.6rem 1.2rem;
  width: 100%;
  height: 58px;
  border-bottom: 0.5px solid ${COLORS.GRAY_300};
`;

const BackButton = styled.div`
  position: absolute;
  left: 1.2rem;
  top: 50%;
  transform: translateY(-50%);
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

const Title = styled.div`
  font-weight: 600;
  color: ${COLORS.GRAY_900};
`;

const Profile = styled.div`
  position: absolute;
  right: 1.2rem;
  top: 50%;
  transform: translateY(-50%);
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background-color: ${COLORS.GRAY_500};
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`;

const StateBox = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: green;
`;

const PageBody = styled.div`
  position: relative;
  height: calc(100vh - 58px);
`;

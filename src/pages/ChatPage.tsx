import { useNavigate } from 'react-router-dom';
import PREV_ICON from 'src/assets/icon/prev.svg';
import { COLORS, ROUTES } from 'src/constants';
import { MessageInput, Messages } from 'src/features/chat';
import { styled } from 'styled-components';

function ChatPage() {
  const navigate = useNavigate();

  const moveBackPage = () => {
    navigate(ROUTES.MAIN);
  };

  return (
    <Layout>
      <PageHeader>
        <BackButton onClick={moveBackPage}>
          <img src={PREV_ICON} alt="prev_icon" />
        </BackButton>
        <Title>푸바오와 채팅</Title>
      </PageHeader>
      <PageBody>
        <Messages />
        <MessageInput />
      </PageBody>
    </Layout>
  );
}

export default ChatPage;

const Layout = styled.div`
  background-color: ${COLORS.PRIMARY_50};
  overflow: hidden;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  -webkit-scrollbar {
    display: none;
    width: 0; /* Remove scrollbar space */
    height: 0;
    background: transparent; /* Optional: just make scrollbar invisible */
  }
`;

const PageHeader = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  padding: 0.6rem 1.2rem;
  width: 100%;
  height: 58px;
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

const PageBody = styled.div`
  position: relative;
  height: calc(var(--vh, 1vh) * 100 - 58px);
`;

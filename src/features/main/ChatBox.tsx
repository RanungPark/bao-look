import { useNavigate } from 'react-router';
import { COLORS, ROUTES } from 'src/constants';
import styled from 'styled-components';

const ChatBox = () => {
  const navigate = useNavigate();

  const moveChat = () => {
    navigate(ROUTES.CHAT);
  };
  return (
    <ChatBoxLayout onClick={moveChat}>
      <Profile>
        <Image src="src/assets/img/baoProfile.jpg" alt="푸바오 사진" />
        <StateBox></StateBox>
      </Profile>

      <StateMessage>
        <h3>푸바오</h3>
        <div>워토우 더 먹고싶다바오</div>
      </StateMessage>

      <MessageBox>
        <Newly>최근 메시지</Newly>
        <MessageLayout>
          <MessageState>읽음 10:43</MessageState>
          <MessagePhrases>알겠다바오</MessagePhrases>
        </MessageLayout>
      </MessageBox>
    </ChatBoxLayout>
  );
};

export default ChatBox;

const ChatBoxLayout = styled.div`
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 10%);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  height: 323px;
  margin: 18px 0px;
  padding: 0 15px 15px 15px;
  background-color: white;
`;

const Profile = styled.div`
  width: 118px;
  height: 118px;
  border-radius: 50%;
  margin-top: 26px;
  background-color: ${COLORS.GRAY_500};
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`;

const StateBox = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: #4bd371;
  position: absolute;
  bottom: 6px;
  right: 9px;
`;

const StateMessage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  font-size: 15px;
  color: ${COLORS.GRAY_500};
  margin-top: 24px;

  h3 {
    color: ${COLORS.GRAY_900};
  }
`;

const MessageBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 61px;
  background-color: ${COLORS.PRIMARY_100};
  padding: 12px 12.5px;
  border-radius: 10px;
  width: 100%;
  margin-top: 37px;
`;

const Newly = styled.span`
  font-size: 15px;
  color: ${COLORS.PRIMARY_600};
`;

const MessageLayout = styled.div`
  display: flex;
  align-items: end;
  gap: 0.4rem;
`;

const MessageState = styled.div`
  font-size: 11px;
  color: ${COLORS.GRAY_400};
`;

const MessagePhrases = styled.div`
  padding: 8px 15px;
  background-color: ${COLORS.SECONDARY_500};
  color: ${COLORS.SECONDARY_800};
  border-radius: 18px 0px 18px 18px;
  word-wrap: break-word;
  border: 1px solid ${COLORS.SECONDARY_700};
`;

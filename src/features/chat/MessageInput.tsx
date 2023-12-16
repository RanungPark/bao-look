import { useState } from 'react';

import { useRecoilValue, useSetRecoilState } from 'recoil';
import SEND_ICON from 'src/assets/icon/send.svg';
import { COLORS } from 'src/constants';
import { styled } from 'styled-components';

import { postMessage } from './service';
import { chatStore, lastChatId } from './store';
import { formatTime } from './utils';
import { authStore } from '../auth/store';

const MessageInput = () => {
  const [message, setMessage] = useState('');
  const { memberId } = useRecoilValue(authStore);
  const setChatState = useSetRecoilState(chatStore);
  const maxMessageLength = 300;
  const lastChatIdState = useRecoilValue(lastChatId);

  const keyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.nativeEvent.isComposing) {
      return;
    }
    if (e.key === 'Enter') {
      e.preventDefault();
      sendMessage();
    }
  };

  const sendMessage = () => {
    if (message === '') {
      return;
    }

    setChatState(prev => ({
      ...prev,
      messages: [
        ...prev.messages,
        { role: 'user', message, chatTime: formatTime(Date()), chatId: lastChatIdState + 1 },
      ],
    }));

    setChatState(prev => ({ ...prev, loading: true }));
    postMessage(memberId, message).then(res => {
      if (!res) {
        return;
      }
      const newMessages = Array.from({ length: res.assiChatTime.length }, (_, index) => {
        return {
          chatTime: res.assiChatTime[index],
          message: res.messageResponse[index],
          role: 'assistant',
          chatId: res?.savedAssiChatId[index],
        };
      });
      setChatState(prev => ({ ...prev, messages: [...prev.messages, ...newMessages] }));
    });

    setChatState(prev => ({ ...prev, loading: false }));
    setMessage('');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputMessage = e.target.value;
    if (inputMessage.length <= maxMessageLength) {
      setMessage(inputMessage);
    }
  };

  return (
    <Layout>
      <InputWrapper>
        <Input
          type="text"
          placeholder="푸바오에게 인사해 보세요!"
          value={message}
          onChange={handleInputChange}
          onKeyDown={keyDownHandler}
        />
        <Button onClick={sendMessage}>
          <img src={SEND_ICON} alt="send_icon" />
        </Button>
      </InputWrapper>
    </Layout>
  );
};

export default MessageInput;

const Layout = styled.div`
  padding: 18px 16px;
  width: 100%;
  height: 80px;
  position: absolute;
  bottom: 0;
  background-color: ${COLORS.PRIMARY_100};
`;

const InputWrapper = styled.div`
  position: relative;
  display: flex;
  height: 44px;
  border-radius: 99px;
  background: ${COLORS.WHITE};
  font-size: 14px;
  padding: 0 45px 0 20px;
`;

const Input = styled.input`
  width: 100%;
  border: none;
  outline: none;
  background: none;
  &::placeholder {
    color: rgba(0, 0, 0, 0.5);
  }
`;

const Button = styled.div`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  width: 26px;
  height: 26px;
  cursor: pointer;
`;

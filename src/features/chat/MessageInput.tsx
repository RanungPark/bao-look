import { useState } from 'react';

import SEND_ICON from 'src/assets/icon/send.svg';
import { COLORS } from 'src/constants';
import { styled } from 'styled-components';

const MessageInput = () => {
  const [message, setMessage] = useState('');

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
    // TODO: send message to server
    setMessage('');
  };

  return (
    <Layout>
      <InputWrapper>
        <Input
          type="text"
          placeholder="푸바오에게 인사해 보세요!"
          value={message}
          onChange={e => setMessage(e.target.value)}
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
  /* border-top: 0.5px solid ${COLORS.GRAY_300}; */
  background-color: ${COLORS.PRIMARY_100};
`;

const InputWrapper = styled.div`
  position: relative;
  display: flex;
  height: 100%;
  border-radius: 99px;
  /* border: 1px solid rgba(0, 0, 0, 0.5); */
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
  /* background-color: red; */
  cursor: pointer;
`;

import { useState } from 'react';

import { useSetRecoilState } from 'recoil';
import SEND_ICON from 'src/assets/icon/send.svg';
import { COLORS } from 'src/constants';
import styled from 'styled-components';

import { rollingPaperStore } from './store';

interface IProps {
  setInputState: React.Dispatch<React.SetStateAction<boolean>>;
}

const RMessageInput = ({ setInputState }: IProps) => {
  const [message, setMessage] = useState('');
  const setRollingPaperState = useSetRecoilState(rollingPaperStore);
  const maxMessageLength = 100;

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
    setRollingPaperState(prev => ({
      ...prev,
      messages: [...prev.messages, { sender: 'user', message, date: Date(), nickName: '닉네임' }],
    }));
    setRollingPaperState(prev => ({ ...prev, loading: true }));
    setMessage('');
    setRollingPaperState(prev => ({ ...prev, loading: false }));
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
          placeholder="푸바오에게 한마디!! (최대 100자)"
          value={message}
          onChange={handleInputChange}
          onKeyDown={keyDownHandler}
          onFocus={() => setInputState(false)}
          onBlur={() => setInputState(true)}
        />
        <Button onClick={sendMessage}>
          <img src={SEND_ICON} alt="send_icon" />
        </Button>
      </InputWrapper>
    </Layout>
  );
};

export default RMessageInput;

const Layout = styled.div`
  padding: 18px 16px;
  width: 100%;
  height: 80px;
  position: absolute;
  bottom: 0;
  background: ${COLORS.SECONDARY_100};
`;

const InputWrapper = styled.div`
  position: relative;
  display: flex;
  height: 44px;
  border-radius: 100px;
  background: #fafafa;
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

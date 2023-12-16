import { useState } from 'react';

import axios, { AxiosResponse } from 'axios';
import { useSetRecoilState } from 'recoil';
import SEND_ICON from 'src/assets/icon/send.svg';
import { COLORS, URLS } from 'src/constants';
import styled from 'styled-components';

import { IPostRollingPaper } from './service';
// import { postRollingPaper } from './service';
import { rollingPaperStore } from './store';
// import { authStore } from '../auth/store';

interface IProps {
  setInputState: React.Dispatch<React.SetStateAction<boolean>>;
}

const RMessageInput = ({ setInputState }: IProps) => {
  const [content, setContent] = useState('');
  // const { memberId } = useRecoilValue(authStore);
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

  // const sendMessage = () => {
  //   if (content === '') {
  //     return;
  //   }

  //   setRollingPaperState(prev => ({ ...prev, loading: true }));
  //   //1 => memberId
  //   postRollingPaper(1, content).then(res => {
  //     if (!res) {
  //       return;
  //     }
  //     setRollingPaperState(prev => ({
  //       ...prev,
  //       messages: [
  //         ...prev.messages,
  //         {
  //           content,
  //           rollingPaperId: res.data.rollingPaperId,
  //           memberId: 1, // 1 => memberId
  //           randomName: res.data.randomName,
  //         },
  //       ],
  //     }));
  //   });

  //   setRollingPaperState(prev => ({ ...prev, loading: false }));
  //   setContent('');
  // };

  const sendMessage = () => {
    if (content === '') {
      return;
    }

    axios
      // .post(`${URLS.ROLLING_PAPER}/${memberId}`, {
      //   message,
      // })
      .post(`${URLS.ROLLING_PAPER}/1`, {
        content,
      })
      .then(function (response: AxiosResponse<IPostRollingPaper>) {
        console.log(response.data);
        setRollingPaperState(prev => ({
          ...prev,
          messages: [
            ...prev.messages,
            {
              content,
              rollingPaperId: response.data.data.rollingPaperId,
              memberId: 1, // 1 => memberId
              randomName: response.data.data.randomName,
            },
          ],
        }));
      })
      .catch(function (error) {
        console.log(error.response);
      });

    setRollingPaperState(prev => ({ ...prev, loading: true }));
    setContent('');
    setRollingPaperState(prev => ({ ...prev, loading: false }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputMessage = e.target.value;
    if (inputMessage.length <= maxMessageLength) {
      setContent(inputMessage);
    }
  };

  return (
    <Layout>
      <InputWrapper>
        <Input
          type="text"
          placeholder="푸바오에게 한마디!! (최대 100자)"
          value={content}
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

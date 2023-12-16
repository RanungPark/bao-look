import { useState } from 'react';

import { useNavigate } from 'react-router';
import COVER_BACKGROUND from 'src/assets/icon/cover.svg';
import PREV_WHITE_ICON from 'src/assets/icon/prev-white.svg';
import PREV_ICON from 'src/assets/icon/prev.svg';
import { COLORS, ROUTES } from 'src/constants';
import { RMessageInput, RMessages } from 'src/features/rolling-paper';
import styled from 'styled-components';

const RollingPaper = () => {
  const [inputState, setInputState] = useState(true);
  const navigate = useNavigate();

  const moveBackPage = () => {
    navigate(ROUTES.MAIN);
  };

  return (
    <Layout>
      <PageHeader inputState={inputState}>
        <HeaderContent>
          <BackButton onClick={moveBackPage}>
            {inputState ? <img src={PREV_WHITE_ICON} alt="prev_white_icon" /> : <img src={PREV_ICON} alt="prev_icon" />}
          </BackButton>
          <Title>언제나 널 생각해</Title>
        </HeaderContent>
      </PageHeader>
      <PageBody inputState={inputState}>
        <RMessages />
      </PageBody>
      <RMessageInput setInputState={setInputState} />
    </Layout>
  );
};

export default RollingPaper;

const Layout = styled.div`
  background-color: ${COLORS.SECONDARY_50};
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

const PageHeader = styled.div<{ inputState: boolean }>`
  background-image: ${props => props.inputState && `url(${COVER_BACKGROUND})`};
  background-size: auto;
  color: ${props => (props.inputState ? '#ffffff' : `${COLORS.GRAY_900}`)};
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: ${props => (props.inputState ? '204px' : '88px')};
  transition:
    height 0.3s ease-in-out,
    background-image 0.3s ease-in-out,
    color 0.3s ease-in-out;
`;

const HeaderContent = styled.div`
  position: absolute;
  top: 49px;
  width: 100%;
`;

const BackButton = styled.div`
  position: absolute;
  left: 15px;
  top: 50%;
  transform: translateY(-50%);
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

const Title = styled.div`
  position: absolute;
  font-weight: 600;
  top: 50%;
  transform: translate(-50%, -50%);
  left: 50%;
`;

const PageBody = styled.div<{ inputState: boolean }>`
  position: relative;
  height: ${props => (props.inputState ? `calc(var(--vh, 1vh) * 100 - 204px)` : `calc(var(--vh, 1vh) * 100 - 88px)`)};
  transition: height 0.3s ease-in-out;
`;

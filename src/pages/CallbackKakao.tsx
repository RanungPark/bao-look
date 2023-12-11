import { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
import { COLORS, ROUTES } from 'src/constants';
import { styled } from 'styled-components';

const CallbackKakao = () => {
  const code = new URL(window.location.href).searchParams.get('code');
  const navigate = useNavigate();

  const moveMainPage = () => {
    navigate(ROUTES.MAIN);
  };

  useEffect(() => {
    if (code) {
      // TODO: backend에 code 전달
      console.log(code);
    }
  }, [code, navigate]);

  return (
    <Layout>
      <SplashText>
        만나서 <br />
        반가워요!
      </SplashText>
      <MainContainer>
        <MainImageWrapper>
          <Image src="" alt="profile_img" />
        </MainImageWrapper>
        <Nickname>푸덕이 짱짱</Nickname>
        <div>닉네임으로 활동하게 될 거예요</div>
      </MainContainer>
      <BottomButtonWrapper>
        <StartButton onClick={moveMainPage}>시작할래요!</StartButton>
      </BottomButtonWrapper>
    </Layout>
  );
};

export default CallbackKakao;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const SplashText = styled.div`
  position: absolute;
  top: 10%;
  left: 5%;
`;

const MainContainer = styled.div`
  position: absolute;
  top: 18rem;
  left: 50%;
  transform: translate(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const MainImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Image = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-color: ${COLORS.GRAY_400};
`;

const Nickname = styled.div`
  margin-top: 1.5rem;
  font-size: 1.5rem;
  font-weight: 500;
  text-align: center;
  color: green;
`;

const BottomButtonWrapper = styled.div`
  position: absolute;
  margin: 0.6rem 1.2rem 2.4rem 1.2rem;
  bottom: 0;
  width: calc(100% - 2.4rem);
`;

const StartButton = styled.div`
  width: 100%;
  height: 58px;
  background-color: ${COLORS.GRAY_400};
  border-radius: 10px;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  /* gap: 0.5rem; */
`;

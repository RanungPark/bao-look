import { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import CALLBACK_IMG from 'src/assets/img/callback_img.svg';
import { COLORS, ROUTES } from 'src/constants';
import { kakaoLogin } from 'src/features/auth/service';
import { IAuthStore, authStore } from 'src/features/auth/store';
import { styled } from 'styled-components';

const CallbackKakao = () => {
  const code = new URL(window.location.href).searchParams.get('code');
  const navigate = useNavigate();
  const [authState, setAuthState] = useRecoilState(authStore);

  const moveMainPage = () => {
    navigate(ROUTES.MAIN);
  };

  useEffect(() => {
    if (code) {
      kakaoLogin(code).then(res => {
        res &&
          setAuthState({
            ...(res as unknown as IAuthStore),
          });
      });
    }
  }, [code, setAuthState]);

  return (
    <Layout>
      <SplashText>
        만나서 <br />
        반가워요!
      </SplashText>
      <MainContainer>
        <MainImageWrapper>
          <Image src={CALLBACK_IMG} alt="profile_img" />
        </MainImageWrapper>
        <MainTexts>
          <Nickname>{authState.randomName}</Nickname>
          <div>닉네임으로 활동하게 될 거예요</div>
        </MainTexts>
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
  background-color: ${COLORS.PRIMARY_50};
  /* position: relative; */
`;

const SplashText = styled.div`
  position: absolute;
  top: 18%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${COLORS.PRIMARY_500};
  font-size: 34px;
  font-weight: 700;
  line-height: normal;
  text-align: center;
`;

const MainContainer = styled.div`
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
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
  width: 13rem;
  /* height: 150px; */
`;

const MainTexts = styled.div`
  position: absolute;
  top: 220px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: ${COLORS.GRAY_900};
  font-size: 18px;
  font-weight: 600;
`;

const Nickname = styled.div`
  font-size: 24px;
  font-weight: 600;
  text-align: center;
  color: ${COLORS.PRIMARY_500};
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
  background-color: ${COLORS.PRIMARY_500};
  border-radius: 10px;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${COLORS.WHITE};
  font-size: 17px;
  font-weight: 600;
`;

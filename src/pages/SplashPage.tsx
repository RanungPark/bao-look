import KAKAO_ICON from 'src/assets/icon/kakao.svg';
import { COLORS, KAKAO_LOGIN_URL } from 'src/constants';
import { styled } from 'styled-components';

const SplashPage = () => {
  const onClickKakaoLogin = () => {
    window.location.href = KAKAO_LOGIN_URL;
  };

  return (
    <Layout>
      <MainContainer>
        <MainImageWrapper>
          <Image src="" alt="profile_img" />
        </MainImageWrapper>
        <MainTexts>바오,봐요</MainTexts>
      </MainContainer>
      <BottomButtonWrapper>
        <KakaoButton onClick={onClickKakaoLogin}>
          <ImageWrapper>
            <img src={KAKAO_ICON} alt="kakao_login" />
          </ImageWrapper>
          카카오로 시작하기
        </KakaoButton>
      </BottomButtonWrapper>
    </Layout>
  );
};

export default SplashPage;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
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
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-color: ${COLORS.GRAY_400};
`;

const MainTexts = styled.div`
  position: absolute;
  top: 180px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: #6cbd04;
  font-family: AndongKaturi;
  font-size: 36.632px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const BottomButtonWrapper = styled.div`
  position: absolute;
  margin: 0.6rem 1.2rem 2.4rem 1.2rem;
  bottom: 0;
  width: calc(100% - 2.4rem);
  font-size: 17px;
  font-weight: 600;
`;

const KakaoButton = styled.div`
  width: 100%;
  height: 58px;
  background-color: #ffe42d;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;

const ImageWrapper = styled.div`
  width: 24px;
  height: 24px;
  > img {
    width: 100%;
    height: 100%;
  }
`;

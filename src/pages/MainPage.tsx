import { Toaster } from 'react-hot-toast';
import LINK_ICON from 'src/assets/icon/link.svg';
import { COLORS } from 'src/constants';
import styled from 'styled-components';

import { Header, ChatBox, RollingPaperBox, Calendar } from '../features/main';

function MainPage() {
  const onClickBaoMerch = () => {
    window.location.href = `https://brand.naver.com/everland/category/5f55be35cdbd4bad809c6ff564cef5ac?cp=1`;
  };

  return (
    <MainLayout>
      <PageHeader>
        <Header />
      </PageHeader>
      <PageBody>
        <ChatBox />
        <SubLayout>
          <RollingPaperBox />
          <Calendar />
        </SubLayout>
        <Merch onClick={onClickBaoMerch}>
          바오네 공식 스토어
          <img src={LINK_ICON} alt="link_icon" />
        </Merch>
      </PageBody>
      <Toaster position="bottom-center" reverseOrder={false} />
    </MainLayout>
  );
}

export default MainPage;

const MainLayout = styled.div`
  height: calc(var(--vh, 1vh) * 100);
  padding: 0 1rem 0 1.2rem;
  padding-bottom: 2rem;
  background-color: ${COLORS.PRIMARY_50};
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 0.2rem;
  }
  &::-webkit-scrollbar-thumb {
    background: ${COLORS.PRIMARY_400};
    border-radius: 6px;
  }
`;

const PageHeader = styled.div``;

const PageBody = styled.div``;

const SubLayout = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 17px;
`;

const Merch = styled.h2`
  display: flex;
  height: 61px;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 10%);
  border-radius: 10px;
  margin-top: 18px;
  gap: 6px;
  cursor: pointer;
  background-color: #ffffff;

  &:hover {
    background-color: #f7f7f7f7;
  }
`;

// export const Container = styled(Toaster)`
//   .Toastify__toast {
//     font-size: 16px;
//     border-radius: 5px;
//     padding: 16px 28px;
//     color: #fff;
//     background: rgba(48, 173, 120, 0.8);
//   }
// `;

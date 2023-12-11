import { Toaster } from 'react-hot-toast';
import { COLORS } from 'src/constants';
import styled from 'styled-components';

import { Header, ChatBox, Merch, RollingPaperBox, Calendar } from '../features/main';

function MainPage() {
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
        <Merch />
      </PageBody>
      <Toaster position="bottom-center" reverseOrder={false} />
    </MainLayout>
  );
}

export default MainPage;

const MainLayout = styled.div`
  height: 100vh;
  padding: 0px 16px;
  background-color: ${COLORS.PRIMARY_50};
`;

const PageHeader = styled.div``;

const PageBody = styled.div``;

const SubLayout = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 17px;
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

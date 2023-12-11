import { useNavigate } from 'react-router';
import PREV_ICON from 'src/assets/icon/prev.svg';
import { COLORS } from 'src/constants';
import { RMessageInput, RMessages } from 'src/features/rolling-paper';
import styled from 'styled-components';

const RollingPaper = () => {
  const navigate = useNavigate();

  const moveBackPage = () => {
    navigate(-1);
  };

  return (
    <Layout>
      <PageHeader>
        <BackButton onClick={moveBackPage}>
          <img src={PREV_ICON} alt="prev_icon" />
        </BackButton>
        <Title>언제나 널 생각해</Title>
      </PageHeader>
      <PageBody>
        <RMessages />
        <RMessageInput />
      </PageBody>
    </Layout>
  );
};

export default RollingPaper;

const Layout = styled.div`
  background-color: ${COLORS.SECONDARY_50};
`;

const PageHeader = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 55px;
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
  font-weight: 600;
  color: ${COLORS.GRAY_900};
`;

const PageBody = styled.div`
  position: relative;
  height: calc(100vh - 55px);
`;

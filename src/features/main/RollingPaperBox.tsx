import { useNavigate } from 'react-router';
import { ROUTES } from 'src/constants';
import styled from 'styled-components';

import Sub from './Sub';

const RollingPaperBox = () => {
  const navigate = useNavigate();

  const moveRollingPaper = () => {
    navigate(ROUTES.ROLLING_PAPER);
  };

  return (
    <Layout onClick={moveRollingPaper}>
      <Sub title="언제나 널 생각해" note="푸바오를 생각하는 마음을 남겨주세요!" calendar={false} />
    </Layout>
  );
};

export default RollingPaperBox;

const Layout = styled.div`
  cursor: pointer;
  width: 100%;
`;

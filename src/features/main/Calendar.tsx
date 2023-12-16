import toast from 'react-hot-toast';
import styled from 'styled-components';

import Sub from './Sub';

const Calendar = () => {
  const success = () =>
    toast('푸바오 생일 페이지는 준비 중이에요!', {
      icon: '🥲',
    });

  return (
    <Layout onClick={success}>
      <Sub
        title="푸바오 생일"
        note="푸바오의 생일을 
      축하해 주세요!"
        calendar={true}
      />
    </Layout>
  );
};

export default Calendar;

const Layout = styled.div`
  width: 100%;
  cursor: pointer;
`;

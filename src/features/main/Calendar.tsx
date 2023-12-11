import { toast } from 'react-toastify';
import styled from 'styled-components';

import Sub from './Sub';

const Calendar = () => {
  const success = () =>
    toast('푸바오 생일 페이지는 준비중이에요', {
      position: 'bottom-center',
      autoClose: 1000,
      pauseOnHover: true,
      draggable: true,
      progress: 1,
    });

  return (
    <Layout onClick={success}>
      <Sub
        title="푸바오 생일"
        note="푸바오의 생일을 
      축하해 주세요!"
        day={true}
      />
    </Layout>
  );
};

export default Calendar;

const Layout = styled.div`
  width: 100%;
  background-color: white;
  cursor: pointer;
`;

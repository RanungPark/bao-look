import styled from 'styled-components';

import { Sub } from '.';

const Calendar = () => {
  return (
    <Layout>
      <Sub title="푸바오 생일" note="푸바오의 생일을 축하해 주세요!" day={true} />
    </Layout>
  );
};

export default Calendar;

const Layout = styled.div`
  width: 100%;
  background-color: white;
`;

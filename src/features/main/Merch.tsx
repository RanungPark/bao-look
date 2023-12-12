import { Link } from 'react-router-dom';
import LINK_ICON from 'src/assets/icon/link.svg';
import styled from 'styled-components';

const Merch = () => {
  return (
    <MetchLayout>
      <Link to={`https://brand.naver.com/everland/category/5f55be35cdbd4bad809c6ff564cef5ac?cp=1`}>
        바오네 공식 스토어
      </Link>
      <img src={LINK_ICON} alt="link_icon" />
    </MetchLayout>
  );
};

export default Merch;

const MetchLayout = styled.h2`
  display: flex;
  height: 61px;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 10%);
  border-radius: 10px;
  margin-top: 18px;
  gap: 6px;
  background-color: white;
`;

// import { COLORS } from 'src/constants';
import styled from 'styled-components';

const Header = () => {
  return (
    <Layout>
      <Title>
        푸바오 <img src="src/assets/icon/heart.svg" alt="heart_icon" />
        1일
      </Title>
      {/* <Profile>
        <Image src="" alt="" />
      </Profile> */}
    </Layout>
  );
};

export default Header;

const Layout = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 65px;
`;

const Title = styled.h1`
  display: flex;
  gap: 8px;
`;

// const Profile = styled.div`
//   width: 48px;
//   height: 48px;
//   border-radius: 50%;
//   background-color: ${COLORS.GRAY_500};
// `;

// const Image = styled.img`
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
//   border-radius: 50%;
// `;

import { useEffect, useState } from 'react';

import axios, { AxiosResponse } from 'axios';
import { useRecoilValue } from 'recoil';
import HEAR_ICON from 'src/assets/icon/heart.svg';
import { URLS } from 'src/constants';
import styled from 'styled-components';

import { IMember } from './store';
import { IAuthStore, authStore } from '../auth/store';

const Header = () => {
  const { memberId } = useRecoilValue<IAuthStore>(authStore);
  const [member, setMember] = useState<number | null>(null);

  useEffect(() => {
    axios
      .get(`${URLS.MEMBER}/${memberId}`)
      .then(function (response: AxiosResponse<IMember>) {
        setMember(response.data.data.dday);
      })
      .catch(function (error) {
        console.error(error.response);
      });
  }, [memberId]);

  return (
    <Layout>
      <Title>
        푸바오 <img src={HEAR_ICON} alt="heart_icon" />
        {member}
      </Title>
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

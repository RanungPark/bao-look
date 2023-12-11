import React from 'react';

import { Outlet } from 'react-router-dom';
import { styled } from 'styled-components';

const Layout = ({ children }: { children: React.ReactElement }) => {
  return (
    <PageLayout>
      <Outlet />
      {children}
    </PageLayout>
  );
};

export default Layout;

const PageLayout = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  margin: 0 auto;
  width: 100%;
  max-width: 428px;
  height: 100%;
  min-height: 100vh;
  > * {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`;

import { Suspense } from 'react';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { GlobalStyle } from './common/styles';
import Layout from './common/styles/Layout';
import { ROUTES } from './constants';
import RouteChangeTracker from './libs/analytics/RouteChangeTracker';
import CallbackKakao from './pages/CallbackKakao';
import ChatPage from './pages/ChatPage';
import MainPage from './pages/MainPage';
import RollingPaper from './pages/RollingPaper';
import SplashPage from './pages/SplashPage';

const App = () => {
  const router = createBrowserRouter([
    {
      path: ROUTES.SPLASH,
      element: (
        <Layout>
          <RouteChangeTracker />
        </Layout>
      ),
      children: [
        {
          path: ROUTES.SPLASH,
          element: <SplashPage />,
        },
        {
          path: ROUTES.MAIN,
          element: (
            <Suspense fallback={<div>loading...</div>}>
              <MainPage />
            </Suspense>
          ),
        },
        {
          path: ROUTES.CHAT,
          element: (
            <Suspense fallback={<div>loading...</div>}>
              <ChatPage />
            </Suspense>
          ),
        },
        {
          path: ROUTES.ROLLING_PAPER,
          element: (
            <Suspense fallback={<div>loading...</div>}>
              <RollingPaper />
            </Suspense>
          ),
        },
        {
          path: ROUTES.CALLBACK_KAKAO,
          element: (
            <Suspense fallback={<div>loading...</div>}>
              <CallbackKakao />
            </Suspense>
          ),
        },
      ],
    },
  ]);

  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
};

export default App;

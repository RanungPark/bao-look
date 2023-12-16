import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';

import App from './App';
import GoogleTagManager from './libs/analytics/GoogleTagManager';

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
  <RecoilRoot>
    <GoogleTagManager />
    <App />
  </RecoilRoot>
);

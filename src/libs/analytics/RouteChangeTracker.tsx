import { useEffect, useState } from 'react';

import ReactGA from 'react-ga4';
import { useLocation } from 'react-router-dom';

import { GA_TRACKING_ID, pageViewTrigger } from './gtag';

const RouteChangeTracker = () => {
  const location = useLocation();
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    if (GA_TRACKING_ID) {
      ReactGA.initialize(GA_TRACKING_ID);
      // ReactGA.initialize(GA_TRACKING_ID, { testMode: true });
      setInitialized(true);
    }
  }, []);

  useEffect(() => {
    if (initialized) {
      pageViewTrigger(location);
    }
  }, [initialized, location]);

  return <></>;
};

export default RouteChangeTracker;

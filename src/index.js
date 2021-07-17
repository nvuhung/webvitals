import React from 'react';
import ReactDOM from 'react-dom';
import TagManager from 'react-gtm-module';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

TagManager.initialize({ gtmId: 'GTM-KXCXCHN' });

function sendToAnalytics(event) {
  const { id, name, value, delta } = event;

  window.dataLayer = window.dataLayer || [];
  const webVitalsMeasurement = {
    name,
    id,
    value,
    delta,
    valueRounded: Math.round(name === 'CLS' ? value * 1000 : value),
    deltaRounded: Math.round(name === 'CLS' ? value * 1000 : value),
  };
  console.log('webVitalsMeasurement :>> ', webVitalsMeasurement);

  window.dataLayer.push({
    event: 'web-vitals',
    webVitalsMeasurement,
  });
}

reportWebVitals(sendToAnalytics);

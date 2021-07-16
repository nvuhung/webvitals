import React from 'react';
import ReactDOM from 'react-dom';
import TagManager from 'react-gtm-module'

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

TagManager.initialize({ gtmId: 'GTM-KXCXCHN' });

function sendToAnalytics({ id, name, value }) {
  window.dataLayer = window.dataLayer || [];

  window.dataLayer.push({
    event: 'web-vitals',
    eventCategory: 'Web Vitals',
    eventAction: name,
    eventValue: Math.round(name === 'CLS' ? value * 1000 : value), // values must be integers
    eventLabel: id, // id unique to current page load
    nonInteraction: true, // avoids affecting bounce rate
  });
}

reportWebVitals(sendToAnalytics);

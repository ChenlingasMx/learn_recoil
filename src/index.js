import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RecoilRoot } from 'recoil';
import ErrorBoundary from './component/ErrorBoundary'

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <ErrorBoundary>
        <React.Suspense fallback={<div>Loading...</div>}>
          <App />
        </React.Suspense>
      </ErrorBoundary>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();

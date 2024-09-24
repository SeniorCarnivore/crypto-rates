import React from 'react';
import ReactDOM from 'react-dom/client';

import { StoreProvider } from 'shared/hooks/useStore';
import { RootStore } from 'stores/RootStore';

import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const rootStore = RootStore.create({});

root.render(
  <React.StrictMode>
    <StoreProvider value={rootStore}>
      <App />
    </StoreProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

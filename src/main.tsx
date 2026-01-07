import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/ui/App';
import { AppProvider } from './features/app_context/AppContext';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
);
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { StateProvider } from './Global-State/StateProvider';
import reducer from './Global-State/reducer';
import { initialState } from './Global-State/reducer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
         <App />
    </StateProvider>
  </React.StrictMode>
);



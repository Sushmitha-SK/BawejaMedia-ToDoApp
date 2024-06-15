// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import { Provider } from 'react-redux';
// import store from './redux/store';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <Provider store={store}>
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>
//   </Provider>
// );

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './redux/store';
import { createRoot } from 'react-dom/client';
import styled from 'styled-components';

const root = createRoot(document.getElementById('root'));

const StyledProvider = styled(Provider)`
  font-size: 1.1rem;
  font-family: "Quicksand", sans-serif;
  height: 100%;
`;

root.render(
  <StyledProvider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </StyledProvider>
);

reportWebVitals();

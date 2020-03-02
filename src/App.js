import React from 'react';
import Routes from './routes';

import GlobalStyle from './styles/global';
import { Header } from './styles/index';

function App() {
  return (
    <>
      <Header>
        <p>Daitan Esporte</p>
      </Header>
      <Routes />
      <GlobalStyle />
    </>
  );
}

export default App;

import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider } from '@chakra-ui/core';

import './index.scss';
import App from './App';
import chakra from './styles/chakra';

ReactDOM.render(
  <ChakraProvider resetCSS theme={chakra}>
    <App />
  </ChakraProvider>,
  document.getElementById('app')
);

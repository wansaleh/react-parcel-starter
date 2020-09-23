import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider } from '@chakra-ui/core';

import App from './App';
import chakra from './styles/chakra';

import './index.scss';

ReactDOM.render(
  <ChakraProvider resetCSS theme={chakra}>
    <App />
  </ChakraProvider>,
  document.getElementById('app')
);

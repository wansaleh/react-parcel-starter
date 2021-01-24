import './index.css';

import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import chakra from './styles/chakra';

ReactDOM.render(
  <ChakraProvider resetCSS theme={chakra}>
    <App />
  </ChakraProvider>,
  document.getElementById('app')
);

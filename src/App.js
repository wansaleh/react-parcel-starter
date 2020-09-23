import { Box, Button, Heading } from '@chakra-ui/core';
import React, { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <Box p="10">
      <Heading>React Parcel Starter</Heading>

      <Box>Count: {count}</Box>

      <Button onClick={() => setCount(count + 1)}>Add</Button>
    </Box>
  );
};

export default App;

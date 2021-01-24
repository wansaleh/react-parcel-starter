import { Box, Button, Heading, HStack } from '@chakra-ui/react';
import React, { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <Box p="10">
      <Heading fontSize="2xl">React Parcel Starter</Heading>

      <HStack spacing="2" my="4">
        <Button onClick={() => setCount(count + 1)}>+1</Button>
        <Button onClick={() => setCount(count + 5)}>+5</Button>
        <Button onClick={() => setCount(count + 10)}>+10</Button>
        <Button onClick={() => setCount(0)}>Reset</Button>
        <Box fontSize="xl" pl="2">
          Count: {count}
        </Box>
      </HStack>
    </Box>
  );
};

export default App;

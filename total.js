
import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import UserTable from './components/UserTable';

const Main = () => {
  return (
    <ChakraProvider>
      <UserTable />
    </ChakraProvider>
  );
};

export default Main;

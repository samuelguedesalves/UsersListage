import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { Header } from './components/Header'
import { List } from './components/List';

const App: React.FC = () => {
  return (
    <ChakraProvider>
      <Header/>
      <List/>
    </ChakraProvider>
  );
}

export default App;

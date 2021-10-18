import React from 'react';
import {ChakraProvider} from "@chakra-ui/react";
import './App.css';
import Layout from './components/Layout';
import ConnectButton from './components/ConnectButton';

function App() {
  return (
   <ChakraProvider>
     <Layout>
       <ConnectButton/>
     </Layout>
   </ChakraProvider>
  );
}

export default App;

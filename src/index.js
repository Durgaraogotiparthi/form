import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import FetchApi from './fetch_api_methods';
// import App from './App';
// import FormPractice from './useform';
// import Task from './task1';
// import Callback from './callback';
// import New from './class';
// import Todo from './todolist';
// import Hookpractice from './hooks';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react';
// import Heading from './Heading';
// import { MyProvider } from './MyContext';
// import ComponentC from './ComponentC';
// import Main from './main';
// import Youtube from './useform/useFormpractice.js'
// import Kabaddi from './cricket';

import ZodPractice from './zods';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider>
 <React.StrictMode>
 {/* <MyProvider>
            <ComponentC />
        </MyProvider> */}
    {/* <App/> */}
    {/* <FormPractice/> */}
    {/* <Task/> */}
    {/* <FetchApi/> */}
    {/* <Heading name='durgarao' age={24} isStatus={true}/> */}
    {/* <Callback/> */}
    {/* <New/> */}
    {/* <Todo/> */}
    {/* <Hookpractice/> */}
    {/* <Main/> */}
    {/* <Youtube/> */}
    {/* <Kabaddi/> */}
    <ZodPractice/>
  </React.StrictMode>
  </ChakraProvider>
);

reportWebVitals();

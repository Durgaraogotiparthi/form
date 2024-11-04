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

// import ZodPractice from './zods';
// import Form from './FirstTask/table';
// import Appss from './recycle';
// import UserTable from './FirstTask/userTable';
// import Employee from './employee';
// import Loginpage from './login';
// import Student from './student';
import Employee from './employee';



// import Customer from './youtube/customer';
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
    {/* <ZodPractice/> */}
    {/* <Form/> */}
    {/* <Appss/> */}
    {/* <UserTable/> */}
    {/* <Customer/> */}
    {/* <Employee/> */}
    {/* <Loginpage/> */}
    {/* <Student/> */}
    <Employee/>
  
  </React.StrictMode>
  </ChakraProvider>
);

reportWebVitals();

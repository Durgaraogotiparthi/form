import React from 'react';
import Home from './home';
import Todo from './todolist';
// import About from './about';
// import Contact from './contact';
// import Loginpage from './login';
import Task from './task1';
import App from './App';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Flex, Box, Heading} from '@chakra-ui/react';
import Kabaddi from './cricket';

function Main() {

    function Header() {
        return (
            <Flex as="nav" bg="teal.500" color="white" p={4} align="center">
                <Heading as="h1" size="lg" mr={3}>Durgarao</Heading>
                <Flex as="ul" listStyleType="none">
                    <li style={{ margin: '0 10px' }}><Link to="/">Home</Link></li>
                    <li style={{ margin: '0 10px' }}><Link to="/todo">Todo</Link></li>
                    <li style={{ margin: '0 10px' }}><Link to="/form">Forms</Link></li>
                    <li style={{ margin: '0 10px' }}><Link to="/card">Card</Link></li>
                    <li style={{ margin: '0 10px' }}><Link to="/kabadi">Kaabadi</Link></li>
                </Flex>
            </Flex>
        );
    }

    return (
        <BrowserRouter>
            <Header />
            <Box p={5}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/todo" element={<Todo />} />
                    <Route path="/form" element={<Task />} />
                    <Route path="/card" element={<App />} />
                    <Route path="/kabadi" element={<Kabaddi/>} />
                </Routes>
            </Box>
        </BrowserRouter>
    );
}

export default Main;

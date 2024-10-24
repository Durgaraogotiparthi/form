import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Footer from './Footer';
import "./App.css"
import { Box, Input } from '@chakra-ui/react';
import List from './list';

function Heading(props){
    const [name,setName] = useState('')

    let onValue = (event)=>{
        console.log(event.target.value)
        setName(event.target.value)
    }
    return(
        <div >
            <Input value = {name} onChange={onValue} border="1px solid" />
            <p>Name:{name}</p>
            <h1 className='head'>New Project</h1>
            <ul>
                <li>Home</li>
                <li>Abount</li>
                <li>Contact Us</li>
                <li>Logout</li>
            </ul>
            <hr></hr>
            <Box p='3' m='2'>
            <p>Name:{props.name}</p>
            <p>age:{props.age}</p>
            <p>Status:{props.isStudent}</p>
            </Box>
            <Footer foot={false}/>
            <List/>
        </div>
    )
    
}
Heading.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number, 
    isStudent: PropTypes.bool, 
};
// Heading.defaultProps={
//     name:'Durgarao Goriparthi'
// }

export default Heading

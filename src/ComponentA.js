import React, { useContext } from 'react';
import MyContext from './MyContext';
import { createContext } from 'react';

const context = createContext();

const ComponentA = () => {
    let values = 'Durgarao Goriparthi';
    
    const { value } = useContext(MyContext);

    return <div>{value}</div>;
};

export default ComponentA;

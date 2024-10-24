import React from 'react';
import { useMyContext } from './MyContext';
import ComponentB from './ComponentB';

const ComponentC = () => {
    const { setValue } = useMyContext();

    return (
        <div>
            <h1>Component C</h1>
            <ComponentB />
            <button onClick={() => setValue('New Value from Component C!')}>
                Change Value
            </button>
        </div>
    );
};

export default ComponentC;

import React from 'react';
import ComponentA from './ComponentA';

const ComponentB = () => {
    return (
        <div>
            <h2>Component B</h2>
            <ComponentA />
        </div>
    );
};

export default ComponentB;

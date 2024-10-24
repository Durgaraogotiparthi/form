import { Button, Input } from '@chakra-ui/react';
import React, { useEffect, useRef, useState } from 'react';

function List() {
    const [value, update] = useState(0);
    const ref = useRef(0);
    const [updates, setUpdate] = useState({ name: 'Durgarao', location: 'Hyd', mobile: 6303359425 });
    const [add, addUpdate] = useState(['Apple', 'banana', 'pineapple']);

    useEffect(()=>{
        document.title(`count: ${value}`)
    })

    function updateObject(e) {
        setUpdate((prev) => ({ ...prev, name: e.target.value }));
    }

    const handleButton = () => {
        ref.current = ref.current+1
        update((i) => i + 1);
        update((i) => i + 1);
        update((i) => i + 1);
    };

    const valuesAdd = () => {
        const fruitsAdd = document.getElementById('inputValue');
        const newFruit = fruitsAdd.value.trim(); // Get the input value
        fruitsAdd.value = ''; // Clear the input field

        if (newFruit) { // Check if the input is not empty
            addUpdate([...add, newFruit]); // Update the state with the new fruit
        }
    };

    const valueDelete = (index) => {
        addUpdate(add.filter((_, i) => i !== index)); // Remove the item at the given index
    };

    return (
        <>
            <p>Counter value is {value}</p>
            <button onClick={handleButton}>Click</button>
            <p>My Name is: {updates.name}</p>
            <Input value={updates.name} onChange={updateObject} />

            <ul>
                {add.map((fruit, index) => (
                    <li key={index} onClick={() => valueDelete(index)}>{fruit}</li>
                ))}
            </ul>
            <Input id='inputValue' />
            <Button onClick={valuesAdd}>ADD</Button>
        </>
    );
}

export default List;

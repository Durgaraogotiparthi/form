import { Button, Heading, Input, Flex, Text } from '@chakra-ui/react';
import React, { useState } from 'react';

function Todo() {
    const [task, setTask] = useState([]); //we want to print data or store data in one place task...
    const [newTask, setNewTask] = useState(''); //user enter any data in input that stored in to the setNewTask place

    function handleChanges(event) {
        setNewTask(event.target.value); 
    }

    function addTask() {
        if (newTask.trim()) { 
            setTask([...task, newTask]); 
            setNewTask(''); 
        }
    }

    function deleteTask(index) {
        setTask(task.filter((_, i) => i !== index)); 
    }

    return (
        <>
            <Heading textAlign='center' mb="3">TO-DO List</Heading>
            <Flex align="center">
                <Input
                    type='text'
                    id="inputValue"
                    placeholder="Enter the Task"
                    value={newTask} 
                    onChange={handleChanges}
                />
                <Button onClick={addTask} ml={2}>ADD Task</Button>
            </Flex>
            <div mt='3'>
                {task.map((i, index) => (
                    <Flex key={index} justify="space-between" align="center" mb={2}>
                        <Text>{i}</Text>
                        <Button onClick={() => deleteTask(index)}>Delete</Button>
                    </Flex>
                ))}
            </div>
        </>
    );
}

export default Todo;

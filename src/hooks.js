import { Button,Text} from '@chakra-ui/react';
import React, { useState,useEffect } from 'react';

function Hookpractice(){

const [value,update] = useState(0)

// useEffect(() => {
//     document.title = `Count: ${value}`;
// }, []);


function countChange(){
    update(()=> value + 1)
}
    return(
        <>
        <Text>Count values is {value}</Text>
        <Button onClick={countChange}></Button>
        </>
    )
}

export default Hookpractice
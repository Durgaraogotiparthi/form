import { Heading, useToast} from '@chakra-ui/react';
import React, { useEffect } from 'react';
import axios from 'axios';
import "./App.css";

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,Button,FormControl,FormLabel,Input,useDisclosure,SimpleGrid,Text
  } from '@chakra-ui/react'

function FetchApi() {
    const fetchPosts = async () => {
      const response = await axios('https://jsonplaceholder.typicode.com/posts');
      console.log("AXIOUS DATA",response.data)
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            if (!response.ok) {
                console.log('Network response was not ok');
            }
            const jsonData = await response.json();
            console.log('Fetched Data:', jsonData);
        } catch (error) {
            console.log('Error:', error);
        }
    };

    const Durga = async () => {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title: 'Durgarao Goriparthi' })
        };

        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts', options);
            const value = await response.json(); 
            console.log("RESULT", value);
        } catch (error) {
            console.log('Error:', error);
        }
    };

        // console.log((await fetch('https://jsonplaceholder.typicode.com/posts',options)).json())
    

    const Del = async (a, b) => {
        for (let i = a; i <= b; i++) {
            const options = {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            };

            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${i}`, options); 
                if (response.ok) {
                    console.log(`Deleted post with ID: ${i}`);
                } else {
                    console.log(`Failed to delete post with ID: ${i}`);
                }
            } catch (error)  {
                console.log('Error:', error);
            }
        }
    };
    

    // const postData = async () => {
    //     const options = {
    //         method: 'POST',
            // headers: {
            //     'Content-Type': 'application/json',
            // },
            // body: JSON.stringify({ title: 'Updated Title' })
    //     };

    //     try {
    //         const response = await fetch('https://jsonplaceholder.typicode.com/posts', options);
    //         if (!response.ok) {
    //             throw new Error('Network response was not ok');
    //         }
    //         const jsonData = await response.json();
    //         console.log('Posted Data:', jsonData);
    //     } catch (error) {
    //         console.log('Error:', error);
    //     }
    // };

    useEffect(() => {
        fetchPosts();
        Durga()
        Del(90,93)
        // postData(); 
    }, []); 
    const { isOpen, onOpen, onClose } = useDisclosure()
    const toast = useToast()
    const showToast = ()=>{
        toast(
            {
                title:"Submit is Succesfully...",
                isClosable:true
            }
        )
    }

    return (
        <div>
          <Heading textAlign='center'>Fetch API'S!!</Heading>
          <Button className='App' onClick={onOpen} ml="5">
            Details
        </Button>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create your account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
          <SimpleGrid columns={2} spacing={5}>
            <FormControl>
              <FormLabel>First name<Text as="span" color="red.500">*</Text></FormLabel>
              <Input placeholder='First name' />
            </FormControl>

            <FormControl>
              <FormLabel>Last name<Text as="span" color="red.500">*</Text></FormLabel>
              <Input placeholder='Last name' />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Email:<Text as="span" color="red.500">*</Text></FormLabel>
              <Input placeholder='@gmail.com' />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Password:<Text as="span" color="red.500">*</Text></FormLabel>
              <Input placeholder='Enter your password' />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Address:<Text as="span" color="red.500">*</Text></FormLabel>
              <Input placeholder='Enter Your Adderess..' />
            </FormControl>
            </SimpleGrid>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={showToast}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
        </div>
    );
}

export default FetchApi;

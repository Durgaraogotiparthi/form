import {
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    FormControl,
    FormLabel,
    Input,
    useDisclosure,
    FormErrorMessage,
    Text,
    Thead,
    Tbody,
    Tr,
    Td,
    Th,
    Table,
  } from '@chakra-ui/react';
  import React, { useEffect, useState } from 'react';
  import { useForm } from 'react-hook-form';
  
  function InitialFocus() {
    const { register, handleSubmit, formState: { errors },reset } = useForm();
    const [value,usevalue] = useState([])
  
    const onSubmit = (data) => {
      console.log(data);
      usevalue((i)=> [...i,data])
      onClose();
      reset()
    };

    const PostData = async()=>{
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        try{
            if(!response.ok){
                console.log(response.status)
            }
        }
        catch(error){
            console.log(error)
        }
        let covertData = await response.json();
        console.log(covertData)
    }
  useEffect(
    ()=>{
        PostData()
    },[]
  )
    const { isOpen, onOpen, onClose } = useDisclosure();
    const handleUser = (id) => {
        const update = value.filter(i => i.id !== id)
        usevalue(update)
    }

    const handleEditUser = (user) =>{
        reset(user)
        onOpen()

    }
  
    return (
      <>
        <Button onClick={onOpen}>Open Modal</Button>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Create your account</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl isInvalid={!!errors.firstname}>
                <FormLabel htmlFor='firstname'>First name</FormLabel>
                <Input
                  placeholder='First name'
                  id='firstname'
                  {...register('firstname', {
                    required: "First name is required",
                    minLength: { value: 2, message: "First name must be at least 2 characters long" }
                  })}
                />
                <FormErrorMessage>
                  <Text>{errors.firstname?.message}</Text>
                </FormErrorMessage>
              </FormControl>
  
              <FormControl mt={4} isInvalid={!!errors.lastname}>
                <FormLabel htmlFor='lastname'>Last name</FormLabel>
                <Input
                  placeholder='Last name'
                  id='lastname'
                  {...register('lastname', {
                    required: "Last name is required",
                    minLength: { value: 2, message: "Last name must be at least 2 characters long" }
                  })}
                />
                <FormErrorMessage>
                  <Text>{errors.lastname?.message}</Text>
                </FormErrorMessage>
              </FormControl>
  
              <FormControl mt={4} isInvalid={!!errors.email}>
                <FormLabel htmlFor='email'>Email</FormLabel>
                <Input
                  placeholder='Email'
                  id='email'
                  {...register('email', {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Email is invalid",
                    },
                    validate: {
                        endsWithGmail: value => value.endsWith('@gmail.com') || "Enter a valid Gmail address"
                      }
                  })}
                />
                <FormErrorMessage>
                  <Text>{errors.email?.message}</Text>
                </FormErrorMessage>
              </FormControl>
  
              <FormControl mt={4} isInvalid={!!errors.password}>
                <FormLabel htmlFor='password'>Password</FormLabel>
                <Input
                  placeholder='Password'
                  id='password'
                  type='password' // Added type for password
                  {...register('password', {
                    required: "Password is required",
                    minLength: { value: 6, message: "Password must be at least 6 characters long" }
                  })}
                />
                <FormErrorMessage>
                  <Text>{errors.password?.message}</Text>
                </FormErrorMessage>
              </FormControl>
  
              <FormControl mt={4} isInvalid={!!errors.mobile}>
                <FormLabel htmlFor='mobile'>Mobile</FormLabel>
                <Input
                  placeholder='Mobile'
                  id='mobile'
                  {...register('mobile', {
                    required: "Mobile number is required",
                    pattern: {
                      value: /^[0-9]{10}$/,
                      message: "Mobile number must be 10 digits"
                    }
                  })}
                />
                <FormErrorMessage>
                  <Text>{errors.mobile?.message}</Text>
                </FormErrorMessage>
              </FormControl>
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={handleSubmit(onSubmit)}>
                Save
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>

        <Table>
            <Thead>
                <Tr>
                    <Th>
                        Name
                    </Th>
                </Tr>
            </Thead>
            <Tbody>
                
                    {
                        value.map(
                            (i,index)=>
                                <Tr key={index}>
                               <Td >{i.firstname}</Td>
                               <Td><Button type="button" onClick={() => handleUser(i.id)}>Delete</Button></Td>
                               <Td><Button type="button" onClick={() => handleEditUser(i)}>Edit</Button></Td>
                              </Tr>
                            
                        )
                    }
                   
               
            </Tbody>
        </Table>
      </>
    );
  }
  
  export default InitialFocus;
  
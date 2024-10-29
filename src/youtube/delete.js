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
    FormErrorMessage,Text
  } from '@chakra-ui/react';
import React from 'react';
import {z} from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';




function InitialFocus() {

    const schema = z.object(
        {
            firstname:z.string().min(2,{message:"Name is min 2 charecters"}),
            lastname:z.string().min(2,{message:"lastName is min 2 charecters"}),
            email:z.string().min(2,{message:"Enter min 2 charecters"}).refine((i)=> i.endsWith('@gmail.com'),{message:"enter correct email address"})
        }
    )
    
    const {register,handleSubmit,formState:{errors}} = useForm(
        {resolver:zodResolver(schema)}
    )

    function onSUbmit(data){
        console.log(data)
        onClose()  
    }
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    return (
      <>
        <Button onClick={onOpen}>Open Modal</Button>
  
        <Modal
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Create your account</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
            <FormControl isInvalid={!!errors.firstname}>
                <FormLabel htmlFor='firstname'>First name</FormLabel>
                <Input  placeholder='First name' id='firstname' {...register('firstname')}/>
                <FormErrorMessage>{errors.firstname && <Text>{errors.firstname.message}</Text>}</FormErrorMessage>
              </FormControl>
  
              <FormControl mt={4} isInvalid={!!errors.lastname}>
                <FormLabel htmlFor='lastname'>Last name</FormLabel>
                <Input placeholder='Last name' id='lastname' {...register('lastname')} />
                <FormErrorMessage>{errors.lastname && <Text>{errors.lastname.message}</Text>}</FormErrorMessage>
              </FormControl>
           

            <FormControl mt={4} isInvalid={!!errors.email}>
                <FormLabel htmlFor='email'>Email</FormLabel>
                <Input placeholder='Email' id='email' {...register('email')} />
                <FormErrorMessage>{errors.email && <Text>{errors.email.message}</Text>}</FormErrorMessage>
              </FormControl>

              <FormControl mt={4} isInvalid={!!errors.password}>
                <FormLabel htmlFor='email'>Password</FormLabel>
                <Input placeholder='password' id='password' {...register('password')} />
                <FormErrorMessage>{errors.password && <Text>{errors.email.password}</Text>}</FormErrorMessage>
              </FormControl>

              <FormControl mt={4} isInvalid={!!errors.lastname}>
                <FormLabel htmlFor='lastname'>Mobile</FormLabel>
                <Input placeholder='Last name' id='lastname' {...register('lastname')} />
                <FormErrorMessage>{errors.lastname && <Text>{errors.lastname.message}</Text>}</FormErrorMessage>
              </FormControl>
            </ModalBody>


  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={handleSubmit(onSUbmit)}>
                Save
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }
  export default InitialFocus
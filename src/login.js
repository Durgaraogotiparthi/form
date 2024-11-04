import { Button, FormControl, FormErrorMessage, FormLabel, Heading, Input,Box } from '@chakra-ui/react';
import React from 'react';
import { useForm } from 'react-hook-form';

const Loginpage = () => {
    let {register,handleSubmit,formState:{errors},reset} = useForm()
    const onSubmit = (data) => {
        console.log(data);
        reset();
    }
    return(
        <Box width={{base:'80%', sm:'40%',lg:'60%'}} margin='auto' padding={{base:'4',md:'7'}}>
            <form onSubmit={handleSubmit(onSubmit)}> 
            <Heading as='h2' textAlign='center' mb={4} fontSize={{ base: "2xl", md: "3xl" }}>Login Form</Heading>
            <FormControl isInvalid={errors.email}  mb={4}>
                <FormLabel htmlFor='email' >Email</FormLabel>
                <Input type='text' id='email' {...register('email',
                    {
                        required:"Email is Required",
                         validate: {
                        endsWithGmail: value => value.endsWith('@gmail.com') || "Enter a valid Gmail address"
                      }}
                )}/>
                <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
            </FormControl >
            <FormControl isInvalid={errors.password}  mb={4}>
                <FormLabel htmlFor='password'>Password</FormLabel>
                <Input type='text' id='password' {...register('password',
                   { required:"Password is required",
                    validate:{
                        validateLength: value => value.length >= 6 || "Enter minimum 6 charecters"
                    }
                   }
                )}/>
                <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
            </FormControl>
            <Button type='submit' colorScheme='blue'  mb={4}>Submit</Button>
            </form>
         
        </Box>
    )
};

export default Loginpage;

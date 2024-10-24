import { Heading, Input, Button, FormControl, FormLabel, Box, FormHelperText, RadioGroup, HStack, Radio, Select, FormErrorMessage,useToast } from '@chakra-ui/react';
import React from 'react';
import { useForm } from 'react-hook-form';

function Task() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };
    const toast = useToast()
    const showToast = ()=>{
        toast({
            title:'Submit Successfully Completed!'
        })
    }

    return (
        <div>
            <Heading as="h1" ml={3} mt={2} p={2}>Form Task</Heading>
            <Box maxWidth="600px">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <FormControl m={5}>
                        <FormLabel htmlFor='firstname'>First Name:</FormLabel>
                        <Input 
                            id="firstname" 
                            {...register('firstname', { required: 'First name is required' })} 
                            border="1px solid" 
                            placeholder='Enter your first name..' 
                        />
                        <FormErrorMessage>{errors.firstname && errors.firstname.message}</FormErrorMessage><br />

                        <FormLabel htmlFor='lastname' mt="3">Last Name:</FormLabel>
                        <Input 
                            id="lastname" 
                            {...register('lastname', { required: 'Last name is required' })} 
                            border="1px solid" 
                            placeholder='Enter your last name..' 
                        />
                        <FormErrorMessage>{errors.lastname && errors.lastname.message}</FormErrorMessage><br />

                        <FormLabel htmlFor='email' mt="3">Email address</FormLabel>
                        <Input 
                            id='email' 
                            type='email' 
                            {...register('email', { required: 'Email is required' })}  autoComplete="new-email"
                        />
                        <FormHelperText>
                            Enter the email you'd like to receive the newsletter on.
                        </FormHelperText>

                        <FormLabel htmlFor='password' mt="3">Password:</FormLabel>
                        <Input 
                            id="password" 
                            {...register('password', { required: 'Password is required' })} 
                            type="password" 
                            border="1px solid" 
                        /><br />

                        <FormLabel as='legend' mt="3">Gender:</FormLabel>
                        <RadioGroup defaultValue='Male'>
                            <HStack spacing='24px'>
                                <Radio {...register('gender', { required: 'Please select your gender' })} value='Male'>Male</Radio>
                                <Radio {...register('gender')} value='Female'>Female</Radio>
                                <Radio {...register('gender')} value='Other'>Other</Radio>
                            </HStack>
                        </RadioGroup>
                        <FormHelperText>Enter Your Gender.</FormHelperText>

                        <FormLabel htmlFor='country1' mt="3">Country</FormLabel>
                        <Select id='country' {...register('country', { required: 'Country selection is required' })} placeholder='Select country'>
                            <option value='United Arab Emirates'>United Arab Emirates</option>
                            <option value='Nigeria'>Nigeria</option>
                            <option value='India'>India</option>
                            <option value='Australia'>Australia</option>
                        </Select>
                        <Button type="submit" mt={2} onClick={showToast}>Submit</Button>
                    </FormControl>
                </form>
            </Box>
        </div>
    );
}

export default Task;
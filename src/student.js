import { Box, Button, FormControl, FormLabel, HStack, Input, Radio, RadioGroup, Text, Stack, Heading } from '@chakra-ui/react';
import React from 'react';
import { useForm } from 'react-hook-form';

function Student() {
    const { register, handleSubmit, formState: { errors },reset } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        reset();
    };

    return (
        <div>
            <Heading as="h2" size="lg" mb={6} textAlign="center">
                Student Registration
            </Heading>
       
        <Box p={4} >
        {/* width={{ base: '80%', sm: '60%',md:'40%', lg: '60%' }} */}
    <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }} gap={4} mb="4">

            <form onSubmit={handleSubmit(onSubmit)}>
                <Stack spacing={4}>
                    <HStack spacing={4} justifyContent="center">
                        <FormControl isInvalid={!!errors.firstname}>
                            <FormLabel htmlFor='firstname'>First Name</FormLabel>
                            <Input 
                                id='firstname' 
                                type='text' 
                                {...register('firstname', { required: "First name is required" })} 
                            />
                            <Text color="red">{errors.firstname?.message}</Text>
                        </FormControl>

                        <FormControl isInvalid={!!errors.lastname}>
                            <FormLabel htmlFor='lastname'>Last Name</FormLabel>
                            <Input 
                                id='lastname' 
                                type='text' 
                                {...register('lastname', { required: "Last name is required" })} 
                            />
                            <Text color="red">{errors.lastname?.message}</Text>
                        </FormControl>
                    </HStack>

                    <FormControl isInvalid={!!errors.dob}>
                        <FormLabel htmlFor='dob'>Date Of Birth</FormLabel>
                        <Input 
                            id='dob' 
                            type='date' 
                            {...register('dob', { required: "Date of Birth is required" })} 
                        />
                        <Text color="red">{errors.dob?.message}</Text>
                    </FormControl>

                    <FormControl isInvalid={!!errors.gender}>
                        <FormLabel htmlFor='gender'>Gender</FormLabel>
                        <RadioGroup defaultValue="">
                            <HStack spacing="24px">
                                <Radio value='male' {...register('gender', { required: "Gender is required" })}>Male</Radio>
                                <Radio value='female' {...register('gender')}>Female</Radio>
                                <Radio value='other' {...register('gender')}>Other</Radio>
                            </HStack>
                        </RadioGroup>
                        <Text color="red">{errors.gender?.message}</Text>
                    </FormControl>

                    <FormControl isInvalid={!!errors.mobile}>
                        <FormLabel htmlFor='mobile'>Mobile</FormLabel>
                        <Input 
                            id='mobile' 
                            type='number' 
                            {...register('mobile', {
                                required: "Mobile number is required",
                                pattern: {
                                    value: /^[0-9]{10}$/,
                                    message: "Mobile number must be 10 digits"
                                }
                            })} 
                        />
                        <Text color="red">{errors.mobile?.message}</Text>
                    </FormControl>

                    <FormControl isInvalid={!!errors.email}>
                        <FormLabel htmlFor='email'>Email</FormLabel>
                        <Input 
                            id='email' 
                            type='email' 
                            {...register('email', { 
                                required: "Email is required", 
                                pattern: {
                                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                    message: "Invalid email address"
                                }
                            })} 
                        />
                        <Text color="red">{errors.email?.message}</Text>
                    </FormControl>

                    <FormControl isInvalid={!!errors.address} mb={4}>
                        <FormLabel htmlFor='address'>Address</FormLabel>
                        <Input 
                            id='address' 
                            type='text' 
                            {...register('address', { required: "Address is required" })} 
                        />
                        <Text color="red">{errors.address?.message}</Text>
                    </FormControl>
                </Stack>

                <Button type='submit' mb={4} colorScheme="teal">Submit</Button>
            </form>
            </Grid>
        </Box>
        </div>
    );
}

export default Student;

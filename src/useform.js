import { Button, FormControl, FormLabel, Input, Alert, AlertIcon, AlertTitle, AlertDescription } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';

function FormPractice() {
    // Define the validation schema
    const schema = yup.object({
        email: yup.string().email("Email format is not valid").required("Email is required"), // Added required validation
        password: yup.string().required("Password is required"), // Added required validation for password
    });

    // Integrate Yup with react-hook-form using yupResolver
    const { register, handleSubmit, control, formState: { errors } } = useForm({
        resolver: yupResolver(schema) // Set the resolver to validate with Yup
    });
    
    const [showAlert, setShowAlert] = useState(false);

    const onSubmit = (data) => {
        console.log(data);
        setShowAlert(true); 
    };

    return (
        <div style={{ padding: '20px' }}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormControl mb="4">
                    <FormLabel htmlFor='email'>Email:</FormLabel>
                    <Input 
                        id='email' 
                        {...register('email')} 
                        isInvalid={!!errors.email} // Highlight the input if there's an error
                    />
                    <p className="error-message">{errors.email?.message}</p> {/* Show error message for email */}

                    <FormLabel htmlFor='password'>Password:</FormLabel>
                    <Input 
                        id='password' 
                        type="password"
                        {...register('password')} 
                        isInvalid={!!errors.password} // Highlight the input if there's an error
                    />
                    <p className="error-message">{errors.password?.message}</p> {/* Show error message for password */}

                    <Button type='submit' mt="3">Submit</Button>
                </FormControl>
            </form>  
            <DevTool control={control} />
            {showAlert && ( 
                <Alert
                    status='success'
                    variant='subtle'
                    flexDirection='column'
                    alignItems='center'
                    justifyContent='center'
                    textAlign='center'
                    height='200px'
                    mt={4}
                >
                    <AlertIcon boxSize='40px' mr={0} />
                    <AlertTitle mt={4} mb={1} fontSize='lg'>
                        Application submitted!
                    </AlertTitle>
                    <AlertDescription maxWidth='sm'>
                        Thanks for submitting your application. Our team will get back to you soon.
                    </AlertDescription>
                </Alert>
            )}
        </div>
    );
}

export default FormPractice;

import { Button, FormLabel, Input } from '@chakra-ui/react';
import '../App.css';
import React from 'react';
import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';

function Youtube() {
    
    let defaultValues = {
        firstname: "Durgarao",
        lastname: "",
        personalDetails: {
            email: "",  // Ensure email is correctly initialized
            password: "",  // Ensure password is correctly initialized
        },
        phoneNumbers: ["", ""],  // Ensure both phone numbers are initialized
        age: 0,  // Default age is set to 0
        dob: new Date().toISOString().slice(0, 10),
    };

    // Correct use of defaultValues
    const { register, handleSubmit, reset, control, formState,watch,getValues,setValue} = useForm({ defaultValues });
    const { errors,isValid } = formState;  // Capture errors from form state
    console.log(isValid)

    const watchForm = watch('firstname') //it is showing on webpage what we update

    function handlegetValues(){
        console.log("Get values in the form",getValues()) //get the all values in the form in webpage
    }

    const setValueuoadte = ()=>{
        setValue("firstname","");
        setValue("email","");

    }

    const onSubmit = (data) => {
        console.log(data);  // Output submitted data to console
        reset();  // Reset form after submission
    };

    return (
        <>
        <h1>{watchForm}</h1>
            <form onSubmit={handleSubmit(onSubmit)} >
                {/* First Name Field */}
                <div>
                    <FormLabel htmlFor='firstname'>First Name:</FormLabel>
                    <Input
                        id='firstname'
                        placeholder='Enter Your name:'
                        {...register('firstname', {
                            required: {
                                value: true,
                                message: 'Enter your first name..',  // Required validation message
                            },
                            validate: {
                                namecheck: (value) => {
                                    return /^[a-zA-Z]+$/.test(value) || "Enter a valid name.";  // Regex validation for names
                                },
                            },
                        })}
                    />
                    <p className='error'>{errors.firstname?.message}</p>  
                </div>

                {/* Last Name Field */}
                <div>
                    <FormLabel htmlFor='lastname'>Last Name</FormLabel>
                    <Input id="lastname"
                        {...register('lastname', {
                            required: {
                                value: true,
                                message: 'Enter your Last name..'  // Required validation message
                            },
                            validate: {
                                name: (j) => {
                                    return /^[a-zA-Z]+$/.test(j) || "Enter valid name";  // Regex validation
                                }
                            }
                        })}
                    />
                    <p className='error'>{errors.lastname?.message}</p>  
                </div>

                {/* Email Field */}
                <div>
                    <FormLabel htmlFor='email'>Email:</FormLabel>
                    <Input
                        name='email'
                        placeholder='@gmail.com'
                        id='email' 
                        {...register('personalDetails.email', {
                            required: {
                                value: true,
                                message: "Email is required",  // Required validation message
                            },
                            validate: {
                                EmailCheck: (value) => {
                                    return value !== 'veeradurgarao@gmail.com' || "Enter another email";  // Validation for specific email
                                },
                                end: (value) => {
                                    return value.endsWith('@gmail.com') || "Enter a valid email";  // Validation for email format
                                },
                            //    emailCheck:async(d)=>{
                            //     const response =  await fetch('https://jsonplaceholder.typicode.com/users')
                            //     const data = response.json();
                            //     return data.length === 0 || "Enter a another mail"

                            //     }
                            },
                        })}
                    />
                    <p className='error'>{errors.personalDetails?.email?.message}</p>  
                </div>

                {/* Password Field */}
                <div>
                    <FormLabel htmlFor='password'>Password:</FormLabel>
                    <Input
                        name='password'
                        id='password'
                        type='password'  // Use type password for security
                        {...register('personalDetails.password', {
                            required: {
                                value: true,
                                message: "Password is required...",  // Required validation message
                            },
                            validate: (value) => {
                                return value.length >= 8 || "Password must be at least 8 characters.";  // Length validation
                            },
                        })}
                    />
                    <p className='error'>{errors.personalDetails?.password?.message}</p>  
                </div>

                {/* Mobile Number Field */}
                <div>
                    <FormLabel htmlFor='mobile'>Mobile</FormLabel>
                    <Input id='mobile'
                        {...register("phoneNumbers.0", {
                            required: {
                                value: true,
                                message: 'Mobile number is required.'  // Required validation message
                            },
                            validate: {
                                numberCheck: (k) => {
                                    return /^[0-9]+$/.test(k) || "Enter Numbers Only";  // Validation for numeric input
                                }
                            }
                        })}
                    />
                    <p className='error'>{errors.phoneNumbers?.[0]?.message}</p> 
                </div>

                {/* Alternative Number Field */}
                <div>
                    <FormLabel htmlFor='alternative'>Another Number</FormLabel>
                    <Input id="alternative" {...register("phoneNumbers.1")} />
                </div>

                {/* Age Field */}
                <div>
                    <FormLabel htmlFor='age'>Age</FormLabel>
                    <Input 
                        type='number' 
                        {...register('age', {
                            valueAsNumber: true,  // Ensure the value is treated as a number
                            required: {
                                value: true,
                                message: 'Age is required.',  // Required validation message
                            },
                            min: {
                                value: 0,
                                message: "Age cannot be negative."  // Ensure age is non-negative
                            }
                        })}
                    />
                    <p className='error'>{errors.age?.message}</p> 
                </div>

               {/* DOB Field */}
<div>
    <FormLabel htmlFor='dob'>DOB</FormLabel>
    <Input 
        id='dob' 
        type='date' 
        {...register('dob', {
            valueAsDate: true,
            required: {
                value: true,
                message: 'Date of Birth is required.',  // Required validation message
            },
            validate: {
                isPastDate: (value) => {
                    const today = new Date();
                    return value < today || "Date of Birth must be in the past.";  // Ensure date is in the past
                },
            },
        })} 
    />
    <p className='error'>{errors.dob?.message}</p> 
</div>


                <Button type='submit' disabled={!isValid} mt="3" ml='2'>Submit</Button> 
                
                <Button type='button' onClick={handlegetValues} mt="3" ml="2">Get Vlaues</Button>
                <Button type='button' onClick={setValueuoadte} mt="3" ml="2">Set Vlaues</Button>
                
            </form>
            <DevTool control={control} />  
        </>
    );
}

export default Youtube;

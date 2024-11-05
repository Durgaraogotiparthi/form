import {
  Box, Button, FormControl, FormLabel, Heading, Input,
  NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper,
  Textarea, Text, Grid, Select,
} from '@chakra-ui/react';
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const employeeSchema = z.object({
  firstname: z.string().min(1, { message: "First name is required" }),
  lastname: z.string().min(1, { message: "Last name is required" }),
  email: z.string().email({ message: "Invalid email format" }),
  phone: z.string().min(10, { message: "Phone number must be at least 10 digits" }),
  dob: z.string().min(1, { message: "Date of Birth is required" }),
  address: z.string().min(1, { message: "Address is required" }),
  jobTitle: z.string().min(1, { message: "Job title is required" }),
  department: z.string().min(1, { message: "Department is required" }),
  age: z.number({
    required_error: "Age is required",
    invalid_type_error: "Age must be a number",
  }),
});

function Employee() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: zodResolver(employeeSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div>
      <Heading as="h4" textAlign="center" mt="3" mb="4">
        Employee Form
      </Heading>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box width="100%" maxWidth="800px" textAlign="center" mx="auto" padding={3}>
          <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }} gap={4} mb="4">
            <FormControl isInvalid={!!errors.firstname}>
              <FormLabel htmlFor="firstname">First Name</FormLabel>
              <Input id="firstname" type="text" placeholder="Enter your first name" {...register('firstname')} />
              {errors.firstname && <Text color="red">{errors.firstname.message}</Text>}
            </FormControl>
            
            <FormControl>
              <FormLabel htmlFor="middlename">Middle Name</FormLabel>
              <Input id="middlename" type="text" placeholder="Enter your middle name" {...register('middlename')} />
            </FormControl>
            <FormControl isInvalid={!!errors.lastname}>
              <FormLabel htmlFor="lastname">Last Name</FormLabel>
              <Input id="lastname" type="text" placeholder="Enter your last name" {...register('lastname')} />
              {errors.lastname && <Text color="red">{errors.lastname.message}</Text>}
            </FormControl>

            <FormControl>
              <FormLabel htmlFor="role">Role</FormLabel>
              <Select {...register('role')}>
                <option>Software Developer</option>
                <option>Frontend Developer</option>
                <option>Backend Developer</option>
                <option>Full stack Developer</option>
              </Select>
            </FormControl>

            <FormControl isInvalid={!!errors.email}>
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input type="email" id="email" placeholder="@gmail.com" {...register('email')} />
              {errors.email && <Text color="red">{errors.email.message}</Text>}
            </FormControl>
            <FormControl isInvalid={!!errors.phone}>
              <FormLabel htmlFor="phone">Mobile Number</FormLabel>
              <Input type="text" id="phone" placeholder="Enter your number" {...register('phone')} />
              {errors.phone && <Text color="red">{errors.phone.message}</Text>}
            </FormControl>
          
            <FormControl isInvalid={!!errors.dob}>
              <FormLabel htmlFor="dob">Date of Birth</FormLabel>
              <Input type="date" id="dob" {...register('dob')} />
              {errors.dob && <Text color="red">{errors.dob.message}</Text>}
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="employeeid">Employee Id</FormLabel>
              <Input type="number" id="employeeid" />
            </FormControl>

            <FormControl>
              <FormLabel htmlFor="status">Status</FormLabel>
              <Select {...register('status')}>
                <option>Active</option>
                <option>Inactive</option>
                <option>Suspended</option>
                <option>Left</option>
              </Select>
            </FormControl>
         
            <FormControl isInvalid={!!errors.jobTitle}>
              <FormLabel htmlFor="jobTitle">Job Title</FormLabel>
              <Input id="jobTitle" type="text" placeholder="Enter your job title" {...register('jobTitle')} />
              {errors.jobTitle && <Text color="red">{errors.jobTitle.message}</Text>}
            </FormControl>
            <FormControl isInvalid={!!errors.department}>
              <FormLabel htmlFor="department">Department</FormLabel>
              <Input id="department" type="text" placeholder="Enter your department" {...register('department')} />
              {errors.department && <Text color="red">{errors.department.message}</Text>}
            </FormControl>

            <FormControl isInvalid={!!errors.age}>
              <FormLabel htmlFor="age">Age</FormLabel>
              <NumberInput id="age">
                <NumberInputField {...register('age', { valueAsNumber: true })} />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              {errors.age && <Text color="red">{errors.age.message}</Text>}
            </FormControl>
          </Grid>

          <FormControl isInvalid={!!errors.address} mb="4">
            <FormLabel htmlFor="address">Address</FormLabel>
            <Textarea id="address" {...register('address')} />
            {errors.address && <Text color="red">{errors.address.message}</Text>}
          </FormControl>

          <Button type="submit" colorScheme="teal" mt={4}>
            Submit
          </Button>
        </Box>
      </form>
    </div>
  );
}

export default Employee;

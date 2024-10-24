import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { FormLabel, Input,Button } from '@chakra-ui/react';

function name(a,b){
  
}

function ZodPractice(){

  c
  const {register,handleSubmit} = useForm();

  const onSubmit = (data) =>{
    console.log(data)
  }

  return(
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
      <FormLabel htmlFor='name'>Name:</FormLabel>
      <Input id='namme' type='text' {...register('name')}/>
      <FormLabel htmlFor='email'>Email:</FormLabel>
      <Input id='email' type='email' {...register('email')}/>
      <FormLabel htmlFor='password'>password:</FormLabel>
      <Input id='password' type='password' {...register('password')}/>
      <Button type="submit" mt="3">Submit</Button>
      </form>
    </div>
  )
}
export default ZodPractice
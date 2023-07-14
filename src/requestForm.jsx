import { Button, Flex, FormControl, FormLabel, Heading, Input, Select, FormErrorMessage, Textarea, Spinner,Text } from '@chakra-ui/react';
import { useAuth, useSigninCheck } from 'reactfire';
import {useForm} from 'react-hook-form';
import { LoginButton } from './loginButton';





export default function RequestForm() {
  const auth = useAuth();
  const user = auth.currentUser;
   const { data: signInCheckResult, status } = useSigninCheck();

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  // get the date parameter from the URL
  const urlParams = new URLSearchParams(window.location.search);
  const date = urlParams.get('date');


  console.log('date', date);
  console.log('ERROR',errors);
  console.log("USER", user);
  console.log("date string",  new Date().toDateString());


  if (status === 'loading') {
    return <Flex my={5}justify={'center'} w={'100vw'}><Spinner/></Flex>;
  } else if(signInCheckResult.signedIn === false) {
    return <Flex my={5}justify={'center'} w={'100vw'}><Text>Please sign in with your USNA account</Text></Flex>;
  }

  
  return (
    <Flex w={'100vw'} justifyContent={'center'}>

    <Flex m={5} >
    <form style={{width:'95vw', maxWidth:'400px'}} onSubmit={handleSubmit(onSubmit)}>
      <FormControl textAlign={'center'} isInvalid={errors.date} isRequired >
        <FormLabel>Flight date</FormLabel> 
      <Input  type="date"  defaultValue={date } placeholder="Flight Date" {...register("date", { required: 'This is required'})}/>
      <FormErrorMessage>
        {errors.date && errors.date.message}
      </FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={errors.start_time} isRequired >
      <FormLabel>Start time</FormLabel>
      <Input type="time" placeholder="Start time" {...register("start_time", { required: 'This is required'})} />
      <FormErrorMessage>
        {errors.start_time && errors.start_time.message}
      </FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={errors.end_time} isRequired >
      <FormLabel>End time</FormLabel>
      <Input type="time"  placeholder="End time" {...register("end_time", {required: 'This is required'})} />
      <FormErrorMessage>
        {errors.end_time && errors.end_time.message}
      </FormErrorMessage>
      </FormControl>


      <FormControl my={1} isInvalid={errors.location} isRequired >
      <FormLabel>Location</FormLabel>
      <Select  {...register("location")}>
        <option value="Hospital Point">Hospital Point</option>
        <option value=" Farragut Field"> Farragut Field</option>
        <option value=" Dewey Field"> Dewey Field</option>
        <option value=" Rip Miller Field"> Rip Miller Field</option>
        <option value=" NSAA E-Course"> NSAA E-Course</option>
        <option value=" Other"> Other</option>
      </Select>
      <FormErrorMessage>
        {errors.location && errors.location.message}
      </FormErrorMessage>
      </FormControl>

      <FormControl my={1} isInvalid={errors.operator_name} isRequired >
      <Input type="text" placeholder="Operator name" defaultValue={user.displayName} {...register("operator_name", {required: true, maxLength: 80})} />
      <FormErrorMessage>
        {errors.operator_name && errors.operator_name.message}
      </FormErrorMessage>
      </FormControl>

      <FormControl my={1} isInvalid={errors.email} isRequired >
      <Input type="text" placeholder="Email" defaultValue={user.email} {...register("email", {required: true, pattern: /^\S+@\S+$/i})} />
      <FormErrorMessage>
        {errors.email && errors.email.message}
      </FormErrorMessage>
      </FormControl>

      <FormControl  my={1} isInvalid={errors.mobile_number} isRequired >
      <Input type="tel"placeholder="Mobile number" {...register("mobile_number", {required: 'This is required', minLength: 6, maxLength: 12})} />
      <FormErrorMessage>
        {errors.mobile_number && errors.mobile_number.message}
      </FormErrorMessage>
      </FormControl>

      <FormControl my={1}   >
      <Textarea placeholder='Additional Comments' {...register("comments", {})} />
      </FormControl>

      <Button my={3}  colorScheme='blue' type="submit" >Submit Request</Button>

    </form>
    </Flex>
    </Flex>

	);
}

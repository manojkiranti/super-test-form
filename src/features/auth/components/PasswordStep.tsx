import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Input } from '../../../components/Form';
import { Button } from '../../../components/Elements';

interface PasswordStepProps {
  onNext: (data: FormData) => void;
}

const schema = yup.object().shape({
  password: yup.string().min(8, 'Password must be at least 8 characters').max(16, 'Password not more than 16 characters').required('Please enter your password'),
  repeatPassword: yup.string().oneOf([yup.ref('password')], 'Passwords must match').required('Confirm password is required.'),
});

type FormData = yup.InferType<typeof schema>;

export const PasswordStep: React.FC<PasswordStepProps> = ({ onNext }) => {
  const { register, handleSubmit, formState: { errors, isValid } } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    onNext(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input type='password' name='password' placeholder="Password" register={register} errors={errors} />
      <Input type='password' name='repeatPassword' placeholder="Confirm Password" register={register} errors={errors} />
      <Button type="submit" variant='secondary' width='full' inProgress={!isValid}>
        Continue
      </Button>
    </form>
  );
};
import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import useFetch from '../../../hooks/useFetch';
import { Input, SelectInput } from '../../../components/Form';
import { Button } from '../../../components/Elements';
import { Typography } from '../../../components/Typography';

const phoneRegExp = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/;

interface Country {
  name: {
    common: string;
    official: string;
    nativeName: {
      eng: {
        official: string;
        common: string;
      };
    };
  };
}

interface InitialInfoStepProps {
  onNext: (data: FormData) => void;
}

const schema = yup.object().shape({
  username: yup.string().min(4, 'Username must be at least 4 characters').max(12, 'Username not more than 12 characters').required('Username is required'),
  email: yup.string().email().required('Email is required'),
  phone: yup.string().matches(phoneRegExp, 'Please enter a valid phone number').required('Please enter a valid phone number'),
  country: yup.string().required('Please select your country'),
});
type FormData = yup.InferType<typeof schema>;

const transformCountries = (countriesData: Country[] | undefined): { key: string; value: string }[] => {
  if (!countriesData) return [];
  return countriesData.map((country: Country) => ({
    key: country.name.common,
    value: country.name.common,
  }));
};

export const InitialInfoStep: React.FC<InitialInfoStepProps> = ({ onNext }) => {
  const { register, handleSubmit, formState: { errors, isValid } } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const { data: countries, loading: countriesLoading, error: countriesError } = useFetch<Country[]>(
    'https://restcountries.com/v3.1/all?fields=name'
  );

  const onSubmit = (data: FormData) => {
    onNext(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input name="username" type="text" label="Username" placeholder="Input username" register={register} errors={errors} />
      <Input name="email" type="text" label="Email" placeholder="Input email" register={register} errors={errors} />
      <Input name="phone" label="Phone" type="tel" placeholder="Enter phone" register={register} errors={errors} />

      <SelectInput
        disabled={countriesLoading}
        name="country"
        selectKey="key"
        selectValue="value"
        placeholder="Please enter your country"
        label="Country"
        register={register}
        errors={errors}
        options={transformCountries(countries ?? [])}
      />
      {countriesError && (
        <Typography variant='p' elementProps={{ className: 'error mb-2' }}>
          Fetching countries error. Please try again.
        </Typography>
      )}

      <Button size="large" type="submit" variant='secondary' width='full' inProgress={!isValid || countriesLoading} >
        Continue
      </Button>
    </form>
  );
};



import { useState, useMemo, useCallback } from 'react';
import { FormLayout } from '../components/FormLayout';
import { StepsIndicator } from '../components/StepsIndicator';
import { RegisterStepData, ReviewData } from '../types';

import { steps } from '../utils';

export const Register = () => {
  const [registerStep, setRegisterStep] = useState<number>(0);
  const [customerData, setCustomerData] = useState<RegisterStepData | undefined>();

  const handleNext = useCallback((data: RegisterStepData) => {
    setCustomerData((prevData) => ({ ...prevData, ...data }));
    setRegisterStep((prevStep) => prevStep + 1);
  }, []);

  const StepComponent = useMemo(() => {
    return steps[registerStep]?.component || (() => null);
  }, [registerStep]);

  const stepHeading = useMemo(() => {
    return steps[registerStep]?.heading || '';
  }, [registerStep]);

  return (
    <div className="register-form">
      <StepsIndicator activeStep={registerStep + 1} />
      <FormLayout heading={stepHeading}>
        <StepComponent onNext={handleNext} data={customerData as ReviewData} />
      </FormLayout>
    </div>
  );
};


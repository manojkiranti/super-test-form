import { steps } from "../utils";

export const StepsIndicator = ({ activeStep }: { activeStep: number }) => {
  const completedSteps = activeStep - 1;

  return (
    <div className="steps-indicator">
      {steps.map((step, index) => (
        <div
          key={`step-${index}`}
          className={`indicator ${activeStep === index + 1 ? 'active' : ''} ${completedSteps >= index + 1 ? 'completed' : ''}`}
        >
          {step?.heading || ''}
        </div>
      ))}
    </div>
  );
};
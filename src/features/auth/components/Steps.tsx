import { InitialInfoStep } from "./InitialInfoStep";
import { PasswordStep } from "./PasswordStep";
import { ReviewForm } from "./ReviewForm";

export interface Step {
  component: React.FC<{ onNext: (data: any) => void; data: any }>;
  heading: string;
}

export const steps: Step[] = [
  {
    component: InitialInfoStep,
    heading: 'Initial info',
  },
  {
    component: PasswordStep,
    heading: 'Password screen',
  },
  {
    component: ReviewForm,
    heading: 'Review screen',
  },
];

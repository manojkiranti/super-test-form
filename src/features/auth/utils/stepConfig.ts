import { InitialInfoStep } from "../components/InitialInfoStep";
import { PasswordStep } from "../components/PasswordStep";
import { ReviewForm } from "../components/ReviewForm";

export const steps = [
  {
    component: InitialInfoStep,
    heading: "Initial info",
  },
  {
    component: PasswordStep,
    heading: "Password screen",
  },
  {
    component: ReviewForm,
    heading: "Review screen",
  },
];

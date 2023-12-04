export interface InitialInfoData {
  username: string;
  email: string;
  phone: string;
  country: string;
}

export interface PasswordStepData {
  password: string;
  repeatPassword: string;
}

export interface ReviewData {
  username: string;
  phone: string;
  country: string;
}
export type RegisterStepData = InitialInfoData | PasswordStepData | ReviewData;

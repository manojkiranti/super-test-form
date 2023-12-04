import { ReactNode } from "react";

export const ErrorComponent: React.FC<{ children: ReactNode }> = ({ children }) => (
  <div className="error">{children}</div>
);
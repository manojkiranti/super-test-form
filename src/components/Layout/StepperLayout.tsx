import React, { ReactNode, CSSProperties } from 'react';

interface StepperLayoutProps {
  children: ReactNode;
  style?: CSSProperties;
}

export const StepperLayout: React.FC<StepperLayoutProps> = ({ children, style }) => {
  const mergedStyles: CSSProperties = {
    ...style,
  };

  return (
    <div className="main-layout" style={mergedStyles}>
      {children}
    </div>
  );
};
import React, { ReactNode } from 'react';


type TypographyProps = {
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
  children: ReactNode;

  elementProps?: JSX.IntrinsicElements['h1'];
};

export const Typography: React.FC<TypographyProps> = ({
  variant,
  children,
  elementProps,
}: TypographyProps) => {
  const Element = variant;

  return <Element {...elementProps}>{children}</Element>;
};

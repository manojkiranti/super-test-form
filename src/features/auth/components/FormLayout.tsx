import { ReactNode } from 'react';
import { Typography } from '../../../components/Typography';
import { Card } from '../../../components/Elements';

interface FormLayoutProps {
  heading: string;
  children: ReactNode;
}

export const FormLayout: React.FC<FormLayoutProps> = ({ children, heading }: FormLayoutProps) => {
  return (
    <div className='grid-section'>
      <div className='grid-bar'>
        <div className='grid-col-16 '>
          <div className='form-body'>
            <div className='text-align-center'>
              <Typography variant='h1' elementProps={{ className: 'mb-3' }}>Super test form</Typography>
              <Typography variant='h4' elementProps={{ className: 'text-subtitle', style: { marginBottom: '2.5rem' } }}>{heading}</Typography>
            </div>

            <div className='max-content'>
              <Card>{children}</Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


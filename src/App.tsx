import '../src/assets/scss/main.scss';
import { StepperLayout } from './components/Layout';
import { Register } from './features/auth';
import { useMemo } from 'react';

import BG from './assets/images/bg.svg';

const App: React.FC = () => {
  const backgroundStyle = useMemo(() => ({
    backgroundImage: `url(${BG})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }), []);

  return (
    <StepperLayout style={backgroundStyle}>
      <Register />
    </StepperLayout>
  );
};

export default App;
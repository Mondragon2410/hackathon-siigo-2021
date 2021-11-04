import './App.css';
import { useEffect, useState } from 'react';
import { AllCardsComponent } from './Components/Cards';
import { TEST } from './TEST';

function App() {

  const [init, setInit] = useState(false)
  useEffect(() => {
    TEST();
    setInit(true);
  }, []);

  return (
    <>
      {init ? 
      <AllCardsComponent />
       : null}
    </>

  );
}

export default App;

import React, {useCallback} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {MainStack} from './config/navigation/stacks/main.stacks';

const AppReal = () => {
  const [array, setArray] = useState([]);

  const funzione = useCallback(() => {
    if (array.length) {
      console.log('Non ci sono elementi');
    } else {
      console.log(array);
    }
  }, [array]);

  funzione();

  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
};

export default AppReal;

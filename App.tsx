import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import NavigationBar from './src/layouts/NavigationBar';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <NavigationBar />
    </NavigationContainer>
  );
}

export default App;

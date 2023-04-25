// import {View, Text} from 'react-native';
// import React from 'react';
// import Home from './src/screen/Home';

// const App = () => {
//   return <Home />;
// };

// export default App;

import * as React from 'react';
import {Button, View, Text} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './src/screen/Home';
import FirstStep from './src/screen/newDeices/FirstStep';
import SecondStep from './src/screen/newDeices/SecondStep';
import ThirdStep from './src/screen/newDeices/ThirdStep';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="FirstStep" component={FirstStep} />
        <Stack.Screen name="SecondStep" component={SecondStep} />
        <Stack.Screen name="ThirdStep" component={ThirdStep} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// import { Feather } from '@expo/vector-icons';

import Home from './pages/Home';
import Details from './pages/Details';

const Stack = createStackNavigator();

export default function Routes(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Alugue',
          }}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{
            title: 'Detalhes',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

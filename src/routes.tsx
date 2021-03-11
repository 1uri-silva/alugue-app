import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Feather } from '@expo/vector-icons';

import Home from './pages/Home';

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
            headerRight: () => {
              <Feather name="shopping-cart" size={20} />;
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

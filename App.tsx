import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { AppLoading } from 'expo';

import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_700Bold,
} from '@expo-google-fonts/montserrat';

import Routes from './src/routes';

const [fontLoaded] = useFonts({
  Montserrat_500Medium,
  Montserrat_400Regular,
  Montserrat_700Bold,
});

if (!fontLoaded) {
  <AppLoading />;
}

export default function App(): JSX.Element {
  return (
    <>
      <StatusBar style="light" backgroundColor="#000" translucent={false} />
      <Routes />
    </>
  );
}

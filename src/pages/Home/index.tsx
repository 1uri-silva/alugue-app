import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

import { Header, InputArea } from './styles';

function Home(): JSX.Element {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Header>
        <InputArea>
          <Feather name="search" size={20} />
        </InputArea>
      </Header>
    </ScrollView>
  );
}

export default Home;

import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

import house from '../../assets/house1.jpg';

import { Header, InputSearch, InputArea, New, Title } from './styles';
import Novices from '../../components/Novices';

const Home: React.FC = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Header>
        <InputArea>
          <InputSearch
            placeholder="O que está procurando?"
            placeholderTextColor="gray"
          >
            <Feather name="search" size={24} color="black" />
          </InputSearch>
        </InputArea>
      </Header>

      <New>
        <Title>Novidades</Title>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <Novices
            cover={house}
            name="Casa Floripa"
            description="Casa nova uma quadra do mar, lugar seguro e monitorado 24horas."
            onPress={() => { }}
          />
        </ScrollView>
      </New>
    </ScrollView>
  );
};

export default Home;

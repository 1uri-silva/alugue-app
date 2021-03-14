import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

import house from '../../assets/house1.jpg';

import { Header, InputSearch, InputArea, New, Title } from './styles';
import Novices from '../../components/Novices';

const Home: React.FC = () => {
  const nav = useNavigation();
  function handle(): void {
    nav.navigate('Details');
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Header>
        <InputArea>
          <Feather name="search" size={24} color="black" />
          <InputSearch
            placeholder="O que está procurando?"
            placeholderTextColor="gray"
          />
        </InputArea>
      </Header>

      <New>
        <Title>Novidades</Title>
      </New>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <Novices
          cover={house}
          name="Casa Floripa"
          description="Casa nova uma quadra do mar, lugar seguro e monitorado 24horas."
          onPress={handle}
        />

        <Novices
          cover={house}
          name="Casa Floripa"
          description="Casa nova uma quadra do mar, lugar seguro e monitorado 24horas."
          onPress={handle}
        />

        <Novices
          cover={house}
          name="Casa Floripa"
          description="Casa nova uma quadra do mar, lugar seguro e monitorado 24horas."
          onPress={handle}
        />

        <Novices
          cover={house}
          name="Casa Floripa"
          description="Casa nova uma quadra do mar, lugar seguro e monitorado 24horas."
          onPress={handle}
        />
      </ScrollView>
    </ScrollView>
  );
};

export default Home;

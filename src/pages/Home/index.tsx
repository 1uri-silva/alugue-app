import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

import house from '../../assets/house5.jpg';

import { Header, InputSearch, InputArea, New, Title, Margin } from './styles';
import Novices from '../../components/Novices';
import House from '../../components/House';
import Recommended from '../../components/Recommended';

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

      <Margin>
        <Title>Proximo</Title>
      </Margin>

      <ScrollView showsHorizontalScrollIndicator={false} horizontal>
        <House
          cover={house}
          description="Casa nova uma quadra do mar, lugar seguro e monitorado 24horas."
        />

        <House
          cover={house}
          description="Casa nova uma quadra do mar, lugar seguro e monitorado 24horas."
        />

        <House
          cover={house}
          description="Casa nova uma quadra do mar, lugar seguro e monitorado 24horas."
        />
      </ScrollView>

      <Margin>
        <Title>Dica do dia</Title>
      </Margin>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <Recommended cover={house} name="Rancho" offer="25% OFF" />

        <Recommended cover={house} name="Casa Grande" offer="10% OFF" />

        <Recommended cover={house} name="Barraco" offer="50% OFF" />
      </ScrollView>
    </ScrollView>
  );
};

export default Home;

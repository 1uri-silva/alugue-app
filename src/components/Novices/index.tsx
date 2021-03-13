import React from 'react';
import { View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import {
  Container,
  Cover,
  Content,
  Title,
  Dot,
  Badge,
  Description,
  Footer,
  Width,
  Price,
  Complete,
} from './styles';

interface Data {
  cover?: File | undefined;
  name: string;
  description: string;
  onPress: () => void;
}

const Novices: React.FC<Data> = ({ cover, onPress, name, description }) => {
  return (
    <Container onPress={onPress}>
      <Cover source={cover} />

      <Content>
        <Title>{name}</Title>
      </Content>
      <Dot>
        <View />
        <Badge>Novo</Badge>
      </Dot>
      <Description>{description}</Description>

      <Footer>
        <Width>
          <Price>R$ 1.200,90</Price>
        </Width>
        <Complete>
          <Ionicons name="ios-add-circle" size={24} color="black" />
        </Complete>
      </Footer>
    </Container>
  );
};

export default Novices;

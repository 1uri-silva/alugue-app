import React from 'react';
import { View } from 'react-native';

import { Container, Cover, Content, Description, Price } from './styles';

interface Data {
  cover?: File | undefined;
  description: string;
}

const House: React.FC<Data> = ({ cover, description }) => {
  return (
    <Container>
      <View>
        <Cover source={cover} />
      </View>

      <Content>
        <Description>{description}</Description>
        <Price>R$ 994,60</Price>
      </Content>
    </Container>
  );
};

export default House;

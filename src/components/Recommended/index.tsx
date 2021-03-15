import React from 'react';
import { StyleSheet } from 'react-native';

import { Container, House, Off } from './styles';

interface Data {
  cover?: File | undefined;
  name: string;
  offer: string;
}

const Recommended: React.FC<Data> = ({ cover, name, offer }) => {
  return (
    <Container source={cover} blurRadius={2}>
      <House style={styles.shadow}>{name} </House>

      <Off style={styles.shadow}>{offer}</Off>
    </Container>
  );
};

export default Recommended;

const styles = StyleSheet.create({
  shadow: {
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 2 },
    textShadowRadius: 3,
  },
});

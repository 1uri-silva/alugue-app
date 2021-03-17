import React from 'react';
import { StyleSheet } from 'react-native';
import Stars from 'react-native-stars';
import { Ionicons } from '@expo/vector-icons';

import { ScrollView } from 'react-native-gesture-handler';
import {
  Container,
  SwipeContent,
  HeaderContent,
  WidthStart,
  Rating,
  Width,
  House,
  Align,
  Price,
  Description,
  Slide,
  Png,
} from './styles';
import Swipe from '../../components/Swipe';

const Details: React.FC = () => {
  return (
    <Container>
      <SwipeContent>
        <Swipe />
      </SwipeContent>

      <HeaderContent>
        <Width>
          <House>Casa de Praia</House>
        </Width>

        <WidthStart>
          <Rating>
            Avaliações
            <Align>
              <Stars
                default={2.5}
                count={5}
                half
                startSize={15}
                fullStart={
                  <Ionicons
                    name="md-star"
                    size={24}
                    style={styles.myStarStyle}
                  />
                }
                emptyStart={
                  <Ionicons
                    name="md-star-outline"
                    size={24}
                    style={[styles.myStarStyle, styles.myEmptyStarStyle]}
                  />
                }
                halfStar={
                  <Ionicons
                    name="md-star-half"
                    size={24}
                    style={styles.myStarStyle}
                  />
                }
              />
            </Align>
          </Rating>
        </WidthStart>
      </HeaderContent>

      <Price>$1200,00</Price>

      <Description>Casa nova, lar novo!!!</Description>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <Slide>
          <Png source={require('../../assets/house3.jpg')} />
        </Slide>

        <Slide>
          <Png source={require('../../assets/house2.jpg')} />
        </Slide>

        <Slide>
          <Png source={require('../../assets/house1.jpg')} />
        </Slide>
      </ScrollView>
    </Container>
  );
};
export default Details;

const styles = StyleSheet.create({
  myStarStyle: {
    color: 'yellow',
    backgroundColor: 'transparent',
    textShadowColor: 'black',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  myEmptyStarStyle: {
    color: 'white',
  },
});

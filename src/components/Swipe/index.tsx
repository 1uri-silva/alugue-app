import React from 'react';
import Swiper from 'react-native-swiper';

import { Slider, Cover } from './styles';

const Swipe: React.FC = () => {
  return (
    <Swiper
      dotStyle={{
        backgroundColor: '#000',
        borderColor: '#000',
        borderRadius: 20,
        borderWidth: 1,
        height: 10,
        width: 10,
      }}
      activeDotColor="#FFF"
      activeDotStyle={{
        borderColor: '#000',
        borderRadius: 10,
        borderWidth: 1,
        height: 10,
        width: 10,
      }}
    >
      <Slider>
        <Cover source={require('../../assets/house4.jpg')} />
      </Slider>

      <Slider>
        <Cover source={require('../../assets/house2.jpg')} />
      </Slider>

      <Slider>
        <Cover source={require('../../assets/house3.jpg')} />
      </Slider>
    </Swiper>
  );
};

export default Swipe;

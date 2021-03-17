import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

export const SwipeContent = styled.View`
  flex-direction: row;
  height: 340px;
  width: 100%;
`;

export const HeaderContent = styled.View`
  padding: 0 20px;
  flex-direction: row;
  align-items: center;
  width: 100%;
  margin-top: 20px;
`;

export const Width = styled.View`
  width: 65%;
`;

export const WidthStart = styled.View`
  width: 35%;
`;

export const House = styled.Text`
  font-family: 'Montserrat_700Bold';
  font-size: 18px;
  color: #4f4a4a;
`;

export const Rating = styled.Text`
  font-family: 'Montserrat_500Medium';
  font-size: 9px;
  color: #4f4a4a;
`;

export const Align = styled.View`
  align-items: center;
  flex-direction: row;
`;

export const Price = styled.Text`
  padding: 0 20px;
  font-family: 'Montserrat_700Bold';
  font-size: 16px;
  color: #000;
`;

export const Description = styled.Text`
  margin-bottom: 35px;
  font-family: 'Montserrat_500Medium';
  padding: 0 20px;
  color: #b3aeae;
  font-size: 14px;
  line-height: 20px;
  margin-top: 20px;
`;

export const Slide = styled.View`
  align-items: center;
  justify-content: center;
  background-color: #fff;
  height: 90px;
  border-radius: 8px;
  margin-right: 20px;
`;

export const Png = styled.Image`
  width: 90px;
  height: 90px;
  border-radius: 8px;
`;

import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  margin-top: 20px;
  background-color: #fff;
  height: 250px;
  width: 200px;
  elevation: 2px;
  border-radius: 10px;
  padding: 15px;
  margin-right: 30px;
  margin-left: 2px;
  margin-bottom: 5px;
`;

export const Cover = styled.Image`
  width: 170px;
  height: 110px;
  border-radius: 10px;
`;

export const Content = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.Text`
  font-family: 'Montserrat_700Bold';
  font-size: 12px;
  color: #4f4a4a;
`;

export const Dot = styled.View`
  width: 4px;
  height: 4px;
  border-radius: 4px;
  background-color: red;
`;

export const Badge = styled.Text`
  color: red;
  font-size: 9px;
  font-family: 'Montserrat_700Bold';
`;

export const Description = styled.Text``;

export const Footer = styled.View``;

export const Width = styled.View`
  width: 80%;
`;

export const Price = styled.Text``;

export const Complete = styled.View`
  width: 20%;
`;

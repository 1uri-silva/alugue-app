import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  width: 260px;
  height: 70px;
  background-color: #fff;
  elevation: 2px;
  margin: 2px 10px;
  border-radius: 10px;
`;

export const Cover = styled.Image`
  margin: 5px 10px;
  width: 60px;
  height: 60px;
  border-radius: 10px;
`;

export const Content = styled.View`
  width: 65%;
  justify-content: flex-end;
  padding: 0 8px;
  height: 100%;
`;

export const Description = styled.Text`
  font-size: 9px;
  font-family: 'Montserrat_500Medium';
`;

export const Price = styled.Text`
  font-size: 12px;
  font-family: 'Montserrat_700Bold';
`;

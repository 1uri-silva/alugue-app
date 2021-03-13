import styled from 'styled-components/native';

export const Header = styled.View`
  padding: 20px 20px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const InputArea = styled.View`
  padding: 10px 20px;
  flex-direction: row;
  align-items: center;
  background-color: #fff;
  elevation: 2px;
  height: 45px;
  border-radius: 10px;
  width: 98%;
`;

export const InputSearch = styled.TextInput`
  font-family: 'Montserrat_500Medium';
  font-size: 13px;
  width: 90%;
`;

export const New = styled.View`
  flex-direction: row;
  width: 100%;
  align-items: center;
`;

export const Title = styled.Text`
  padding-left: 15px;
  font-family: 'Montserrat_700Bold';
  font-size: 18px;
  color: #4f4a4a;
`;

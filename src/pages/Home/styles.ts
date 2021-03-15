import styled from 'styled-components/native';

export const Header = styled.View`
  width: 100%;
  margin: 20px 0;
  padding: 0 15px;

  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const InputArea = styled.View`
  width: 98%;
  height: 37px;
  padding: 0 15px;
  elevation: 2px;
  border-radius: 10px;

  align-items: center;
  flex-direction: row;
  background-color: #fff;
`;

export const InputSearch = styled.TextInput`
  font-family: 'Montserrat_500Medium';

  width: 90%;
  font-size: 13px;
  padding: 0 10px;
`;

export const New = styled.View`
  width: 100%;

  flex-direction: row;
  align-items: center;
`;

export const Title = styled.Text`
  font-family: 'Montserrat_700Bold';

  color: #4f4a4a;
  font-size: 18px;
  padding: 0 15px;
`;

export const Margin = styled.View`
  flex-direction: row;
  margin-bottom: 10px;
  align-items: center;
  margin-top: 20px;
`;

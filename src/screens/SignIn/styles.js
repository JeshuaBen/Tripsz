import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.strongBlue};
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #000;
`;

import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.white};
  padding-top: 6px;
`;

export const Content = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 10px 32px;
`;

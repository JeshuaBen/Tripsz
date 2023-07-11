import { TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.white};
  padding: 0 1px;
`;

export const Content = styled.View`
  flex: 1;
  width: 100%;
  padding: 14px 32px;
`;

export const SignInButton = styled(TouchableOpacity)`
  width: 100%;
  min-height: 60px;
  max-height: 60px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.strongBlue};
  border-radius: 10px;
  margin-top: 26px;
`;

export const SignInText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.white};
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;

export const SocialLoginWrapper = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-top: 8px;
  gap: 24px;
`;

export const SocialLoginButton = styled(TouchableOpacity)`
  border: 1px solid ${({ theme }) => theme.COLORS.gray75};
  border-radius: 6px;
  max-width: 68px;
  min-width: 68px;
  max-height: 60px;
  min-height: 60px;
  padding: 12px;
  align-items: center;
  justify-content: center;
`;

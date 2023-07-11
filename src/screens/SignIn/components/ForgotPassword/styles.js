import styled, { css } from "styled-components/native";

export const ForgotPassword = styled.TouchableOpacity`
  margin-top: 20px;
`;

export const ForgotPasswordText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.weakBlue};
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.SORA_SEMIBOLD};
  `}
`;

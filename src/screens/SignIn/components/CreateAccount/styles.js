import styled, { css } from "styled-components/native";

export const CreateAccountWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 12px;
  width: 100%;
`;

export const Divider = styled.View`
  height: 2px;
  width: 20%;
  background-color: ${({ theme }) => theme.COLORS.gray100};
`;

export const CreateAccountTextWrapper = styled.View`
  flex-direction: row;
  padding: 0px 8px;
`;

export const CreateAccountText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.strongBlue};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.SEMIBOLD};
  `}
`;

export const AuxiliarText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.gray150};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`;

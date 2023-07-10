import styled, { css } from "styled-components/native";

export const TitleContainer = styled.View``;

export const TitleWrapper = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 6px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.strongBlue};
    font-size: ${theme.FONT_SIZE.XL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    text-align: center;
  `}
`;

export const Description = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.gray300};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.SEMIBOLD};
    text-align: center;
    line-height: 28px;
  `}
`;

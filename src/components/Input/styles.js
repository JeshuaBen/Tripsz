import styled, { css } from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

export const Container = styled.View`
  width: 100%;
`;

export const Label = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.gray400};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.SEMIBOLD};
    text-align: left;
    line-height: 20px;
  `}
`;

export const InputWrapper = styled.View`
  width: 100%;
  flex-direction: row;
`;

export const TextInput = styled.TextInput.attrs(({ theme }) => ({
  borderBottomWidth: 1,
  borderBottomColor: theme.COLORS.gray50,
}))`
  flex: 1;
  border-bottom-width: 1px;
`;

export const ToggleVisibility = styled(TouchableOpacity)``;

export const Visibility = styled(Feather)``;

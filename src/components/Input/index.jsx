import { useTheme } from "styled-components";
import * as S from "./styles";

const Input = ({
  passwordInput,
  toggleVisibility,
  visibility = false,
  label,
  placeholder,
  onChangeText,
  value,
}) => {
  const theme = useTheme();

  return (
    <S.Container>
      <S.Label>{label}</S.Label>
      <S.InputWrapper>
        <S.TextInput
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={passwordInput && !visibility}
        />
        {passwordInput && (
          <S.ToggleVisibility onPress={toggleVisibility}>
            <S.Visibility
              size={24}
              name={visibility ? "eye-off" : "eye"}
              color={theme.COLORS.gray600}
            />
          </S.ToggleVisibility>
        )}
      </S.InputWrapper>
    </S.Container>
  );
};

export default Input;

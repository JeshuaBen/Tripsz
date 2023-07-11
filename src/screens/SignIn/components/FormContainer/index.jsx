import * as S from "./styles";
import Input from "../../../../components/Input";

const FormContainer = () => {
  return (
    <S.SignInFormContainer>
      <Input
        label="E-mail"
        onChangeText={() => []}
        toggleVisibility={() => []}
        passwordInput={false}
        placeholder="Digite seu e-mail"
        value=""
        visibility
      />
      <Input
        label="Senha"
        onChangeText={() => []}
        toggleVisibility={() => []}
        passwordInput
        placeholder="Digite sua senha"
        value=""
        visibility
      />
    </S.SignInFormContainer>
  );
};

export default FormContainer;

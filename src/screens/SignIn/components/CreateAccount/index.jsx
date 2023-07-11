import * as S from "./styles";

const CreateAccount = () => {
  return (
    <S.CreateAccountWrapper>
      <S.Divider />
      <S.CreateAccountTextWrapper>
        <S.CreateAccountText>
          Crie sua conta <S.AuxiliarText>ou acesse via:</S.AuxiliarText>
        </S.CreateAccountText>
      </S.CreateAccountTextWrapper>
      <S.Divider />
    </S.CreateAccountWrapper>
  );
};
export default CreateAccount;

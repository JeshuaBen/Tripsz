import * as S from "./styles";
import Hello from "../../../../assets/svg/Hello.svg";

const WelcomeText = () => {
  return (
    <S.TitleContainer>
      <S.TitleWrapper>
        <Hello />
        <S.Title>Bem-vindo à tripsz!</S.Title>
      </S.TitleWrapper>
      <S.Description>
        Informe seus dados para acessar o aplicativo
      </S.Description>
    </S.TitleContainer>
  );
};

export default WelcomeText;

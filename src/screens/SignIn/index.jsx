import * as S from "./styles";
import Adverturer from "../../assets/svg/Adventurer.svg";
import WelcomeText from "./components/WelcomeText";
import Input from "../../components/Input";

const SignIn = () => {
  return (
    <S.Container>
      <Adverturer />
      <WelcomeText />
      <S.Content>
        <Input
          label="E-mail"
          onChangeText={() => []}
          toggleVisibility={() => []}
          passwordInput
          placeholder="Digite seu e-mail"
          value=""
          visibility
        />
      </S.Content>
    </S.Container>
  );
};

export default SignIn;

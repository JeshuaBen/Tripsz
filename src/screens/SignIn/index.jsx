import * as S from "./styles";
import Adverturer from "../../assets/svg/Adventurer.svg";
import WelcomeText from "./components/WelcomeText";
import ForgotPassword from "./components/ForgotPassword";
import FormContainer from "./components/FormContainer";
import CreateAccount from "./components/CreateAccount";
import Google from "../../assets/svg/Google.svg";
import Facebook from "../../assets/svg/Facebook.svg";
import Apple from "../../assets/svg/Apple.svg";

const SignIn = () => {
  return (
    <S.Container>
      <Adverturer />
      <WelcomeText />
      <S.Content>
        <FormContainer />
        <ForgotPassword />
        <S.SignInButton>
          <S.SignInText>Entrar</S.SignInText>
        </S.SignInButton>
        <CreateAccount />

        <S.SocialLoginWrapper>
          <S.SocialLoginButton>
            <Facebook />
          </S.SocialLoginButton>
          <S.SocialLoginButton>
            <Google />
          </S.SocialLoginButton>
          <S.SocialLoginButton>
            <Apple />
          </S.SocialLoginButton>
        </S.SocialLoginWrapper>
      </S.Content>
    </S.Container>
  );
};

export default SignIn;

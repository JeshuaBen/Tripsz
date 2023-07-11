import { ActivityIndicator, StatusBar } from "react-native";
import SignIn from "./src/screens/SignIn";

import {
  SofiaSans_400Regular,
  SofiaSans_600SemiBold,
  SofiaSans_700Bold,
  useFonts,
} from "@expo-google-fonts/sofia-sans";
import { Sora_600SemiBold } from "@expo-google-fonts/sora";

import { ThemeProvider } from "styled-components/native";
import theme from "./src/styles/theme";

export default function App() {
  const [areFontsLoaded] = useFonts({
    SofiaSans_400Regular,
    SofiaSans_600SemiBold,
    SofiaSans_700Bold,
    Sora_600SemiBold,
  });

  return areFontsLoaded ? (
    <ThemeProvider theme={theme}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <SignIn />
    </ThemeProvider>
  ) : (
    <ActivityIndicator />
  );
}

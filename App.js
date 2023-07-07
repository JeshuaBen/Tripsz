import { ActivityIndicator } from "react-native";
import SignIn from "./src/screens/SignIn";

import {
  SofiaSans_400Regular,
  SofiaSans_600SemiBold,
  SofiaSans_700Bold,
  useFonts,
} from "@expo-google-fonts/sofia-sans";

export default function App() {
  const [areFontsLoaded] = useFonts({
    SofiaSans_400Regular,
    SofiaSans_600SemiBold,
    SofiaSans_700Bold,
  });

  return areFontsLoaded ? <SignIn /> : <ActivityIndicator />;
}

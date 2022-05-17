import React from "react";

import AppLoading from "expo-app-loading";
import {
  useFonts, 
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold
} from "@expo-google-fonts/roboto";

import { ThemeProvider } from "styled-components/native";
import theme from "./src/theme";

import { SignIn } from "./src/screens/SignIn";

export default function App() {
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold
  });

  if(!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme} >
      <SignIn />
    </ThemeProvider>
  );
}

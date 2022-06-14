import React from "react";
import { StatusBar } from "expo-status-bar";

import AppLoading from "expo-app-loading";
import {
  useFonts, 
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold
} from "@expo-google-fonts/roboto";
import {
  SourceSerifPro_400Regular,
  SourceSerifPro_600SemiBold
} from "@expo-google-fonts/source-serif-pro";

import { ThemeProvider } from "styled-components/native";
import theme from "./src/theme";

import { Routes } from "./src/routes";

import { AppProvider } from "./src/hooks";

export default function App() {
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
    SourceSerifPro_400Regular,
    SourceSerifPro_600SemiBold
  });

  if(!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme} >
      <StatusBar  
        backgroundColor="transparent"
        style="dark"
        translucent
      />
      <AppProvider>
        <Routes />
      </AppProvider>
    </ThemeProvider>
  );
}

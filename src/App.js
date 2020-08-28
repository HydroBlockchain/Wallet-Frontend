import React, { useEffect } from "react";
import SplashScreen from "react-native-splash-screen";
import { StyleSheet, Text, View, StatusBar, Platform } from "react-native";
import AppContainer from "./navigation/AppContainer";
import ThemeContextProvider from "./hooks/useTheme";
import Theme from "./libs/Theme";

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <ThemeContextProvider>
      <AppContainer />
    </ThemeContextProvider>
  );
};

export default App;

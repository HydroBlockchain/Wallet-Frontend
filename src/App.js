import React, { useEffect, useState } from "react";
import SplashScreen from "react-native-splash-screen";
import { Animated, Easing, View, StatusBar, Platform } from "react-native";
import AppContainer from "./navigation/AppContainer";
import LottieView from "lottie-react-native";
import ThemeContextProvider from "./hooks/useTheme";

const App = () => {
  const [animationProgress, setAnimationProgress] = useState({
    progress: new Animated.Value(0),
  });
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  if (!showWave) {
    return (
      <View
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <LottieView
          source={require("./assets/waves.json")}
          autoPlay
          loop
          style={{
            height: "100%",
            width: "100%",
          }}
        />
      </View>
    );
  }
  return (
    <ThemeContextProvider>
      <AppContainer />
    </ThemeContextProvider>
  );
};

export default App;

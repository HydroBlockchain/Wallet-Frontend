import React, { useEffect, useState } from "react";
import SplashScreen from "react-native-splash-screen";
import { Animated, Easing, View, StatusBar, Platform } from "react-native";
import AppContainer from "./navigation/AppContainer";
import LottieView from "lottie-react-native";
import ThemeContextProvider from "./hooks/useTheme";

const ShowAnimation = () => {
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
        key={1}
        loop
        style={{
          height: "100%",
          width: "100%",
        }}
      />
    </View>
  );
};

const App = () => {
  const [animationTime, setAnimationTime] = useState(false);

  useEffect(() => {
    SplashScreen.hide();
  }, []);
  setTimeout(() => {
    setAnimationTime(true);
  }, 5500);
  return (
    <ThemeContextProvider>
      {animationTime ? <AppContainer /> : <ShowAnimation />}
    </ThemeContextProvider>
  );
};

export default App;

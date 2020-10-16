import React, { useEffect, useState } from "react";
import SplashScreen from "react-native-splash-screen";
import { Animated, Easing, View, StatusBar, Platform } from "react-native";
import AppContainer from "./navigation/AppContainer";

import LottieView from "lottie-react-native";
import ThemeContextProvider from "./hooks/useTheme";
import SnowflakeState from "./context/SnowFlake/SnowflakeState";
import Web3 from "web3";

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
    const web3 = new Web3(
      new Web3.providers.HttpProvider(
        `https://rinkeby.infura.io/v3/75cc8cba22ab40b9bfa7406ae9b69a27`
      )
    );

    
    console.log(web3)
    SplashScreen.hide();
  }, []);
  setTimeout(() => {
    setAnimationTime(true);
  }, 5200);
  return (
    <ThemeContextProvider>
      <SnowflakeState>
        {animationTime ? <AppContainer /> : <ShowAnimation />}
      </SnowflakeState>
    </ThemeContextProvider>
  );
};

export default App;

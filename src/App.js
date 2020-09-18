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

const App = (props) => {
  const [drizzleReadinessState, setDrizzleReadinessState] = useState({
    drizzleState: null,
    loading: true,
  });
  const { drizzle } = props;

  useEffect(() => {
    SplashScreen.hide();
    const unsubscribe = drizzle.store.subscribe(() => {
      // every time the store updates, grab the state from drizzle
      const drizzleState = drizzle.store.getState();
      // check to see if it's ready, if so, update local component state
      if (drizzleState.drizzleStatus.initialized) {
        setDrizzleReadinessState({
          drizzleState: drizzleState,
          loading: false,
        });
      }
    });
    return () => {
      unsubscribe();
    };
  }, [drizzle.store, drizzleReadinessState]);

  return (
    <ThemeContextProvider>
      {drizzleReadinessState.loading ? (
        <ShowAnimation />
      ) : (
        <AppContainer
          drizzle={drizzle}
          drizzleState={drizzleReadinessState.drizzleState}
        />
      )}
    </ThemeContextProvider>
  );
};

export default App;

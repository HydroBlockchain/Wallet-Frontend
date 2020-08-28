import React, { useEffect } from "react";
import SplashScreen from "react-native-splash-screen";
import { StyleSheet, Text, View, StatusBar, Platform } from "react-native";

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" setNetworkActivityIndicatorVisible />
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Rubik-medium",
  },
});

export default App;

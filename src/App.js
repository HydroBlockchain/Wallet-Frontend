import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import SplashScreen from "react-native-splash-screen";
import { StyleSheet, Text, View } from "react-native";

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
    setLoadingComplete(true);
  }, []);
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

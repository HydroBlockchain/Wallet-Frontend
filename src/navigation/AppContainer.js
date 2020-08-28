import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MainNavigation from "./MainNavigation";
import Landing from "../screens/Landing";
const Stack = createStackNavigator();

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="landing" component={Landing} />
        <Stack.Screen name="app" component={MainNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppContainer;

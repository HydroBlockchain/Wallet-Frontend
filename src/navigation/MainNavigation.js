//@@Dev this component handles navigation for authentication
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Dashboard/Home";

const Stack = createStackNavigator();

const MainNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="home" component={Home} />
    </Stack.Navigator>
  );
};

export default MainNavigation;

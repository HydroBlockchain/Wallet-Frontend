//@@Dev this component handles navigation for authentication
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Dashboard/Home";
import Transfer from "../screens/SharedScreen/Transfer";
import Notification from "../screens/SharedScreen/Notification";

const Stack = createStackNavigator();

const MainNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="transfer" component={Transfer} />
      <Stack.Screen name="notification" component={Notification} />
    </Stack.Navigator>
  );
};

export default MainNavigation;

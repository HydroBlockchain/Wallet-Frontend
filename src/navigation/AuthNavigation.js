//@@Dev this component handles navigation for authentication
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AuthLanding from "../screens/Auth/AuthLanding";
import Login from "../screens/Auth/Login";
import Register from "../screens/Auth/Register";
import Permissions from "../screens/Auth/Register/Permissions";

const Stack = createStackNavigator();

const AuthNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="AuthLanding" component={AuthLanding} />
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="register" component={Register} />
      <Stack.Screen name="permissions" component={Permissions}/>
    </Stack.Navigator>
  );
};

export default AuthNavigation;

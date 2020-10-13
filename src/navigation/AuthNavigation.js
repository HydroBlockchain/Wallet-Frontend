//@@Dev this component handles navigation for authentication
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AuthLanding from "../screens/Auth/AuthLanding";
import Login from "../screens/Auth/Login";
import Register from "../screens/Auth/Register/index";
// import HydroId from "../screens/Auth/Register/HydroId"
import Permissions from "../screens/Auth/Register/Permissions";
import Claim from "../screens/Auth/Register/Claim";

const Stack = createStackNavigator();

const AuthNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="authLanding" component={AuthLanding} />
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="register" component={Register} />
      {/* <Stack.Screen name="hydroId" compopnent={HydroId}/>  */}
      <Stack.Screen name="permissions" component={Permissions}/>
      <Stack.Screen name="claim" component={Claim}/>
    </Stack.Navigator>
  );
};

export default AuthNavigation;

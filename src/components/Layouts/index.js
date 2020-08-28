import React, { useContext } from "react";
import t from "prop-types";
import styled from "styled-components";
import { SafeAreaView, Image, StatusBar, View, Platform } from "react-native";
import { ThemeContext } from "../../hooks/useTheme";
import Icon from "react-native-vector-icons/Ionicons";

export const BgView = ({ children, style }) => {
  const { isLightTheme, lightTheme, darkTheme } = useContext(ThemeContext);
  const theme = isLightTheme ? lightTheme : darkTheme;
  console.log(theme.primary);
  return (
    <SafeAreaView>
      <StatusBar barStyle="light-content" backgroundColor={theme.primary} />
    </SafeAreaView>
  );
};

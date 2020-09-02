import React, { useContext } from "react";
import { Text } from "react-native";
import { ThemeContext } from "../../hooks/useTheme";

export const Paragraph = ({ children, style }) => {
  const { isLightTheme, lightTheme, darkTheme } = useContext(ThemeContext);
  const theme = isLightTheme ? lightTheme : darkTheme;
  return (
    <React.Frgament>
      <Text
        style={{
          fontSize: 16,
          lineHeight: 26,
          fontFamily: "Rubik-Regular",
          color: theme.basic,
          ...style,
        }}
      >
        {children}
      </Text>
    </React.Frgament>
  );
};

export const Lead = ({ children, style }) => {
  const { isLightTheme, lightTheme, darkTheme } = useContext(ThemeContext);
  const theme = isLightTheme ? lightTheme : darkTheme;
  return (
    <React.Frgament>
      <Text
        style={{
          fontWeight: "bold",
          fontFamily: "Rubik-Regular",
          color: theme.basic,
          fontSize: 16,
          lineHeight: 26,
          ...style,
        }}
      >
        {children}
      </Text>
    </React.Frgament>
  );
};

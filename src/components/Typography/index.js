import styled from "styled-components/native";
import ThemeContext from "../../hooks/useTheme";
import React, { useContext } from "react";

// const { isLightTheme, lightTheme, darkTheme } = useContext(ThemeContext);
// const theme = isLightTheme ? lightTheme : darkTheme;

export const H1 = styled.Text`
  color: ${theme.basic};
  font-family: Rubik-Bold;
  font-size: 41px;
`;

export const H2 = styled.Text`
  color: ${theme.basic};
  font-family: Rubik-Medium;
  font-size: 32px;
`;

export const H3 = styled.Text`
  color: ${theme.basic};
  font-family: Rubik-Medium;
  font-size: 24px;
`;

export const Paragraph = styled.Text`
  color: ${theme.basic};
  font-family: Rubik-Regular;
  font-size: 16px;
  line-height: 26px;
`;

export const Lead = styled(Paragraph)`
  color: ${theme.basic};
  font-weight: bold;
`;

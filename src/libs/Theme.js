import { _responsive } from "../components/style_helpers";

export const lightTheme = {
  basic: "rgba(0, 0, 0, 0.5)",
  secondary: "#f5f5f5",
  background: "#ffffff",
  primary: "#2960CA",
};

export const darkTheme = {
  background: "#001240",
  secondary: "rgba(0, 45, 133, 0.5)",
  basic: "rgba(129, 217, 255, 0.5)",
  primary: "#000935",
};

export default {
  responsive: _responsive,
  gutter: {
    sm: 10,
    md: 25,
    lg: 40,
    statusBar: _responsive([20, 50]),
    padded: _responsive([15, 30]),
  },
};

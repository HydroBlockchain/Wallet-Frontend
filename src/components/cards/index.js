import React, { useContext } from "react";
import { Text, View, Image } from "react-native";
import { Paragraph, Lead } from "../Typography";
import { ThemeContext } from "../../hooks/useTheme";

export const TxFeedCard = ({
  amount,
  name,
  image,
  currency,
  amountEquivalent,
  ...props
}) => {
  const { isLightTheme, lightTheme, darkTheme } = useContext(ThemeContext);
  const theme = isLightTheme ? lightTheme : darkTheme;
  return (
    <View
      style={{
        backgroundColor: theme.secondary,
        padding: 10,
        width: "47%",
        marginTop: "5%",
        marginLeft: 10,
        marginRight: 1,
        borderRadius: 10,
      }}
      {...props}
    >
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={image}
          style={{ borderRadius: 50, width: 70, height: 70 }}
        />
      </View>
      <Paragraph style={{ fontSize: 15 }}>
        {name} sent &#36;{amount} in {currency}
      </Paragraph>
      <View
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignContent: "flex-end",
          alignItems: "flex-end",
        }}
      >
        <Lead>+ &#36;{amount}</Lead>
        <Paragraph style={{ fontSize: 12 }}>{amountEquivalent}</Paragraph>
      </View>
    </View>
  );
};

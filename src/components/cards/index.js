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
export const NotificationProfileCard = ({
  image,
  hydroId,
  userInfo,
  ...props
}) => {
  const { isLightTheme, lightTheme, darkTheme } = useContext(ThemeContext);
  const theme = isLightTheme ? lightTheme : darkTheme;
  return (
    <View
      style={{
        backgroundColor: theme.secondaryCard,
        paddingVertical: 40,
        width: "100%",
        marginTop: "5%",
        marginLeft: 10,
        marginRight: 1,
        alignItems: "center",
        paddingHorizontal: 10,

        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        borderRadius: 10,
      }}
      {...props}
    >
      <Image
        source={image}
        style={{ borderRadius: 50, width: 70, height: 70 }}
      />
      <View>
        <View
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "flex-end",
            width: "90%",
          }}
        >
          <Lead>HYDRO-ID {hydroId}</Lead>
          <Paragraph style={{ textAlign: "right" }}>{userInfo}</Paragraph>
        </View>
      </View>
    </View>
  );
};

export const NotificationCard = ({
  value,
  image,
  notificationInfo,
  ...props
}) => {
  const { isLightTheme, lightTheme, darkTheme } = useContext(ThemeContext);
  const theme = isLightTheme ? lightTheme : darkTheme;
  return (
    <View
      style={{
        backgroundColor: theme.secondaryCard,
        padding: 10,
        width: "45%",
        marginTop: "10%",
        marginLeft: 10,
        marginRight: 5,
        borderRadius: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      {...props}
    >
      <Image
        source={image}
        style={{ borderRadius: 50, width: 70, height: 70 }}
      />

      <Lead style={{ fontSize: 15, textAlign: "center" }}>
        {notificationInfo}
      </Lead>
      <Paragraph style={{ fontSize: 14 }}>{value}</Paragraph>
    </View>
  );
};

import React, { useContext, useEffect, useRef } from "react";
import { Text, View, TouchableOpacity, Image, Animated, Dimensions } from "react-native";
import { Paragraph, Lead } from "../Typography";
import Icon from "react-native-vector-icons/FontAwesome5";

import { ThemeContext } from "../../hooks/useTheme";
const { height, width } = Dimensions.get('window');

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
        width: width - width * 0.1,
        marginTop: width * 0.05,
        alignItems: "center",
        paddingHorizontal: width * 0.05,
        flexDirection: "row",
        justifyContent: "space-between",
        borderRadius: 10,
        marginBottom: width * 0.05,
      }}
      {...props}
    >

      <View style={{ flex: 0.3 }}>
        <Image
          source={image}
          style={{ borderRadius: 50, width: width * 0.15, height: width * 0.15 }}
        />
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: "flex-end",
          alignItems: "flex-end",
        }}
      >
        <Lead>HYDRO-ID {hydroId}</Lead>
        <Paragraph style={{ textAlign: "right" }}>{userInfo}</Paragraph>
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
        width: (width - width * 0.13) / 2,
        marginVertical: width * 0.02,
        marginHorizontal: 5,
        borderRadius: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      {...props}
    >
      <Image
        source={image}
        style={{ borderRadius: 50, width: width * 0.15, height: width * 0.15, marginTop: 5 }}
      />

      <Lead style={{ fontSize: 15, textAlign: "center", paddingTop: 10 }}>
        {notificationInfo}
      </Lead>
      <Paragraph style={{ fontSize: 14, marginBottom: 5 }}>{value}</Paragraph>
    </View>
  );
};

export const SettingsCard = ({
  hydroAddress,
  onWalletPress,
  onIdPress,
  onAddPress,
  customToken,
  ...props
}) => {
  const { isLightTheme, lightTheme, darkTheme } = useContext(ThemeContext);
  const theme = isLightTheme ? lightTheme : darkTheme;
  return (
    <View
      style={{
        backgroundColor: theme.secondaryCard,
        paddingVertical: width * 0.05,
        width: width - width * 0.1,
        marginTop: width * 0.05,
        paddingHorizontal: width * 0.05,
        borderRadius: 10,
        marginBottom: width * 0.05,
      }}
      {...props}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Lead>Choose Wallet to configure</Lead>
        <TouchableOpacity>
          <Icon name="question-circle" color={theme.basic} size={18} />
        </TouchableOpacity>
      </View>

      <View
        style={{
          display: "flex",
          flexDirection: "row",
          marginVertical: width * 0.03,
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          {/* <TouchableOpacity onPress={onWalletPress} style={{ paddingRight: width * 0.04 }}>
            <Image source={require("../../assets/images/bitcoin.png")} />
          </TouchableOpacity> */}
          <TouchableOpacity onPress={onWalletPress} style={{ paddingRight: width * 0.02 }} >
            <Image source={require("../../assets/images/ethereum.png")} />
          </TouchableOpacity>
          <TouchableOpacity onPress={onWalletPress} style={{ paddingHorizontal: width * 0.02 }}>
            <Image source={require("../../assets/images/hydro.png")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={onAddPress}
            style={{
              width: 30,
              height: 30,
              borderRadius: 20,
              marginHorizontal: width * 0.02,
              borderColor: theme.basic,
              borderWidth: 2,
              backgroundColor: theme.background,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Icon name="plus" color={theme.basic} size={12} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ marginTop: 10 }}>
        <Lead>Wallet Address</Lead>
        <TouchableOpacity
          onPress={onIdPress}
          style={{
            padding: 5,
            backgroundColor: theme.secondary,
            borderRadius: 5,
            marginTop: 5
          }}
        >
          <Paragraph>{hydroAddress}</Paragraph>
        </TouchableOpacity>
      </View>
      {customToken && Object.keys(customToken).length > 0 &&
        <View style={{ marginTop: 10 }}>
          <Lead>Custom Token</Lead>
          <TouchableOpacity
            style={{
              padding: 5,
              backgroundColor: theme.secondary,
              borderRadius: 5,
            }}
          >
            <Paragraph>{customToken.symbol}</Paragraph>
          </TouchableOpacity>
        </View>
      }
    </View>
  );
};
export const DepositCard = ({
  hydroAddress,
  onWalletPress,
  onIdPress,
  onAddPress,
  customToken,
  ...props
}) => {
  const { isLightTheme, lightTheme, darkTheme } = useContext(ThemeContext);
  const theme = isLightTheme ? lightTheme : darkTheme;
  return (
    <View
      style={{
        backgroundColor: theme.secondaryCard,
        // paddingVertical: width * 0.05,
        width: width - width * 0.1,
        //marginTop: width * 0.05,
        //paddingHorizontal: width * 0.05,
        borderRadius: 10,
        //  marginBottom: width * 0.05,
      }}
      {...props}
    >

      <View style={{}}>
        <Lead>Wallet Address</Lead>
        <TouchableOpacity
          onPress={onIdPress}
          style={{
            padding: 5,
            backgroundColor: theme.secondary,
            borderRadius: 5,
            // marginTop: 5
          }}
        >
          <Paragraph>{hydroAddress}</Paragraph>
        </TouchableOpacity>
      </View>
      {customToken && Object.keys(customToken).length > 0 &&
        <View style={{ marginTop: 10 }}>
          <Lead>Custom Token</Lead>
          <TouchableOpacity
            style={{
              padding: 5,
              backgroundColor: theme.secondary,
              borderRadius: 5,
            }}
          >
            <Paragraph>{customToken.symbol}</Paragraph>
          </TouchableOpacity>
        </View>
      }
    </View>
  );
};
export const SettingsItemCard = ({ value, onPress, ...props }) => {
  const { isLightTheme, lightTheme, darkTheme } = useContext(ThemeContext);
  const theme = isLightTheme ? lightTheme : darkTheme;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: theme.secondaryCard,
        padding: 10,
        width: (width - width * 0.13) / 2,
        marginVertical: width * 0.02,
        marginHorizontal: 5,
        borderRadius: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      {...props}
    >
      <Paragraph style={{ textAlign: "center" }}>{value}</Paragraph>
    </TouchableOpacity>
  );
};
export const SnowflakeItemCard = ({ value, onPress, ...props }) => {
  const { isLightTheme, lightTheme, darkTheme } = useContext(ThemeContext);
  const theme = isLightTheme ? lightTheme : darkTheme;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: theme.secondaryCard,
        padding: 10,
        width: (width - width * 0.1),
        marginVertical: width * 0.02,
        marginHorizontal: 5,
        borderRadius: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      {...props}
    >
      <Paragraph style={{ textAlign: "center" }}>{value}</Paragraph>
    </TouchableOpacity>
  );
};

export const WalletCard = ({ balance, address, cardName, withdraw, transfer, deposit, ...props }) => {
  const { isLightTheme, lightTheme, darkTheme } = useContext(ThemeContext);
  const theme = isLightTheme ? lightTheme : darkTheme;
  return (
    <View style={{
      position: 'relative',
      backgroundColor: theme.primary,
      width: width - width * 0.10,
      height: 200,
      borderRadius: 25,
      paddingHorizontal: 20,
      paddingVertical: 20,
      marginTop: width * 0.06,
      // alignItems: 'center',
      // justifyContent: 'space-between',
      shadowColor: '#56D5D0',
      shadowOffset: {
        width: 0,
        height: 5,
      },
      shadowOpacity: 0.1,
      shadowRadius: 13.35,
    }} {...props}>
      <Image
        style={{
          position: 'absolute',
          left: 10,
          right: 0,
          top: 0,
          bottom: 0,
        }}
        source={require('../../assets/images/map.png')}
      />
      <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 5 }}>
        <Image source={require('../../assets/images/hydro.png')} />
        <View style={{ position: 'absolute', right: 10 }}>
          <Paragraph style={{ fontWeight: 'bold', fontSize: 20 }}>
            {balance} HYDRO
          </Paragraph>
        </View>
      </View>
      <View style={{ flexDirection: 'row', paddingTop: 20 }}>

        <View style={{ flex: 1, alignItems: "center" }}>
          <TouchableOpacity underlayerColor={'red'} onPress={withdraw} style={{ backgroundColor: 'darkblue', borderRadius: 70 / 2, height: 70, width: 70, justifyContent: "center", alignItems: "center" }}>
            <Icon name="arrow-down" color={"#fff"} size={28} />
          </TouchableOpacity>
          <Text style={{ color: 'white', paddingTop: 10, fontWeight: 'bold', letterSpacing: 0.8 }}>Withdraw</Text>
        </View>

        <View style={{ flex: 1, alignItems: "center" }}>
          <TouchableOpacity onPress={deposit} style={{ backgroundColor: 'darkblue', borderRadius: 70 / 2, height: 70, width: 70, justifyContent: "center", alignItems: "center" }}>
            <Icon name="arrow-up" color={"#fff"} size={28} />
          </TouchableOpacity>
          <Text style={{ color: 'white', paddingTop: 10, fontWeight: 'bold', letterSpacing: 0.8 }}>Deposit</Text>
        </View>

        <View style={{ flex: 1, alignItems: "center" }}>
          <TouchableOpacity onPress={transfer} style={{ backgroundColor: 'darkblue', borderRadius: 70 / 2, height: 70, width: 70, justifyContent: "center", alignItems: "center" }}>
            <Icon name="exchange-alt" color={"#fff"} size={28} />
          </TouchableOpacity>
          <Text style={{ color: 'white', paddingTop: 10, fontWeight: 'bold', letterSpacing: 0.8 }}>Transfer</Text>
        </View>

      </View>
      {/* <Paragraph
        style={{
          fontSize: 21,
          paddingHorizontal: 10,
          marginBottom: '10%',
          color: theme.white,
          textAlign: 'center',
        }}>
        {address}
      </Paragraph> */}


    </View >
  );
};

export const ComingSoonCard = ({ ...props }) => {
  const { isLightTheme, lightTheme, darkTheme } = useContext(ThemeContext);
  const theme = isLightTheme ? lightTheme : darkTheme;
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {

    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 4000
    }).start();
  })


  return (
    <View
      style={{
        position: 'relative',
        backgroundColor: theme.primary,
        width: width - width * 0.10,
        height: 200,
        borderRadius: 25,
        paddingHorizontal: 20,
        paddingVertical: 20,
        marginTop: width * 0.06,
        justifyContent: 'center', alignItems: 'center',
        shadowColor: '#56D5D0',
        shadowOffset: {
          width: 0,
          height: 5,
        },
        shadowOpacity: 0.1,
        shadowRadius: 13.35,
      }}
      {...props}
    >
      <Image
        style={{
          position: 'absolute',
          left: 10,
          right: 0,
          top: 0,
          bottom: 0,
        }}
        source={require('../../assets/images/map.png')}
      />
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
        }}>

        <Animated.View
          style={[
            {
              opacity: fadeAnim // Bind opacity to animated value
            }
          ]}
        >
          <Paragraph
            style={{
              fontWeight: 'bold',
              fontSize: 25,
              color: 'white',
              lineHeight: width * 0.15
            }}>
            COMING SOON...
          </Paragraph>
        </Animated.View>
      </View>
    </View>
  );
};
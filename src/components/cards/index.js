import React, { useContext, useEffect, useRef } from "react";
import { Text, View, TouchableOpacity, Image, Animated } from "react-native";
import { Paragraph, Lead } from "../Typography";
import Icon from "react-native-vector-icons/FontAwesome5";

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
        paddingVertical: 20,
        width: "100%",
        marginTop: "5%",
        marginLeft: 10,
        marginRight: 1,
        paddingHorizontal: 20,
        borderRadius: 10,
      }}
      {...props}
    >
      <View
        style={{
          display: "flex",
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
          marginVertical: "10%",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          {/* <TouchableOpacity onPress={onWalletPress}>
            <Image source={require("../../assets/images/bitcoin.png")} />
          </TouchableOpacity> */}
          <TouchableOpacity
            onPress={onWalletPress}
            style={{ marginHorizontal: "3%" }}
          >
            <Image source={require("../../assets/images/ethereum.png")} />
          </TouchableOpacity>
          <TouchableOpacity onPress={onWalletPress}>
            <Image source={require("../../assets/images/hydro.png")} />
          </TouchableOpacity>
          <TouchableOpacity

            onPress={onAddPress}
            style={{
              width: 30,
              height: 30,
              borderRadius: 20,
              marginHorizontal: "3%",
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
      <View>
        <Lead>Wallet Address</Lead>
        <TouchableOpacity
          onPress={onIdPress}
          style={{
            padding: 5,
            backgroundColor: theme.secondary,
            borderRadius: 5,
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
        width: "45%",
        marginTop: "4%",
        marginLeft: 15,
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
        width: "100%",
        marginTop: "4%",
        marginLeft: 15,
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
      width: '100%',
      height: 220,
      borderRadius: 25,
      paddingHorizontal: 30,
      paddingVertical: 20,
      marginTop: 30,
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
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Image source={require('../../assets/images/hydro.png')} />
        <View style={{ marginLeft: '40%' }}>
          <Paragraph
            style={{
              fontWeight: 'bold',
              fontSize: 20,
            }}>
            {balance} HYDRO
          </Paragraph>
        </View>
      </View>
      <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-end' }}>
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around' }}></View>
        <View style={{ flex: 2, flexDirection: 'row', justifyContent: 'space-around' }}>
          <View style={{
            width: 70, height: 70, shadowColor: "#3FAC9D",
            alignItems: "center",
            shadowOffset: { width: 0, height: 12, },
            shadowOpacity: 0.58,
            shadowRadius: 16.0,
          }}>
            <TouchableOpacity onPress={withdraw} style={{ backgroundColor: 'darkblue', marginBottom: 10, borderRadius: 70 / 2, height: '100%', width: 70, justifyContent: "center", alignItems: "center", }}>
              <Icon name="arrow-down" color={"#fff"} size={28} />
            </TouchableOpacity>
            <Text style={{ color: 'white' }}>Withdraw</Text>
          </View>
          <View style={{
            borderRadius: 70 / 2, width: 70, height: 70, shadowColor: "#3FAC9D",
            shadowOffset: { width: 0, height: 12, },
            alignItems: "center",
            shadowOpacity: 0.58,
            shadowRadius: 16.0,
          }}>
            <TouchableOpacity onPress={deposit} style={{ backgroundColor: 'darkblue', marginBottom: 10, borderRadius: 70 / 2, height: '100%', width: 70, justifyContent: "center", alignItems: "center", }}>
              <Icon name="arrow-up" color={"#fff"} size={28} />
            </TouchableOpacity>
            <Text style={{ color: 'white' }}>deposit</Text>
          </View>
          <View style={{
            borderRadius: 70 / 2, width: 70, height: 70, shadowColor: "#3FAC9D",
            shadowOffset: { width: 0, height: 12, },
            alignItems: "center",
            shadowOpacity: 0.58,
            shadowRadius: 16.0,
          }}>
            <TouchableOpacity onPress={transfer} style={{ backgroundColor: 'darkblue', marginBottom: 10, borderRadius: 70 / 2, height: '100%', width: 70, justifyContent: "center", alignItems: "center", }}>
              <Icon name="exchange-alt" color={"#fff"} size={28} />
            </TouchableOpacity>
            <Text style={{ color: 'white' }}>Transfer</Text>
          </View>
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
        backgroundColor: theme.primary,
        height: 220,
        borderRadius: 25,
        paddingHorizontal: 30,
        paddingVertical: 20,
        marginTop: 30,
        alignItems: 'center',
        // justifyContent: 'space-between',
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
              color: 'white'
            }}>
            COMING SOON...
          </Paragraph>
        </Animated.View>
      </View>
    </View>
  );
};
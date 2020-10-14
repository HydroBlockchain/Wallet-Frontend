import React, { useContext, useEffect } from "react";
import {
  View,
  Image,
  ScrollView,
  Clipboard,
  ToastAndroid,
  TouchableOpacity,
} from "react-native";
import { BgView, Header } from "../../components/Layouts";
import { Paragraph, Lead } from "../../components/Typography";
import Icon from "react-native-vector-icons/FontAwesome5";
import { ThemeContext } from "../../hooks/useTheme";
import { TxFeedCard, WalletCard } from "../../components/cards";
import SnowflakeContext from "../../context/SnowFlake/snowflakeContext";
import Button from "../../components/Button";
import LottieView from 'lottie-react-native';

const Home = ({ navigation, route }) => {
  const snowflakeContext = useContext(SnowflakeContext);

  const { address, hydroId } = route.params;

  console.log(address)

  // const CopyIdentityAddressClipboard = async () => {
  //   await Clipboard.setString(identityAddress);
  //   ToastAndroid.show("Copied To Clipboard!", ToastAndroid.SHORT);
  // };

  const TxFeed = [
    {
      image: require("../../assets/images/emma.png"),
      name: "Emma",
      amount: "10.091",
      currency: "bitcoin",
      amountEquivalent: "0.0001BTC",
      id: 1,
    },
    {
      image: require("../../assets/images/emma.png"),
      name: "Emma",
      amount: "10.091",
      currency: "bitcoin",
      amountEquivalent: "0.0001BTC",
      id: 2,
    },
    {
      image: require("../../assets/images/emma.png"),
      name: "Emma",
      amount: "10.091",
      currency: "bitcoin",
      amountEquivalent: "0.0001BTC",
      id: 3,
    },
    {
      image: require("../../assets/images/emma.png"),
      name: "Emma",
      amount: "10.091",
      currency: "bitcoin",
      amountEquivalent: "0.0001BTC",
      id: 4,
    },
    {
      image: require("../../assets/images/emma.png"),
      name: "Emma",
      amount: "10.091",
      currency: "bitcoin",
      amountEquivalent: "0.0001BTC",
      id: 5,
    },
    {
      image: require("../../assets/images/emma.png"),
      name: "Emma",
      amount: "10.091",
      currency: "bitcoin",
      amountEquivalent: "0.0001BTC",
      id: 6,
    },
    {
      image: require("../../assets/images/emma.png"),
      name: "Emma",
      amount: "10.091",
      currency: "bitcoin",
      amountEquivalent: "0.0001BTC",
      id: 7,
    },
    {
      image: require("../../assets/images/emma.png"),
      name: "Emma",
      amount: "10.091",
      currency: "bitcoin",
      amountEquivalent: "0.0001BTC",
      id: 8,
    },
  ];
  const { isLightTheme, lightTheme, darkTheme, toggleTheme } = useContext(
    ThemeContext
  );
  const theme = isLightTheme ? lightTheme : darkTheme;
  return (
    <BgView>
      <View
        style={{
          marginTop: "7%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Image
          style={{ resizeMode: "contain", width: "20%" }}
          source={require("../../assets/images/logo.png")}
        />
        <View
          style={{
            marginTop: "2%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            marginBottom: "10%",
            alignItems: "center",
          }}
        >
          <TouchableOpacity onPress={toggleTheme}>
            <Icon
              name="moon"
              color={theme.basic}
              solid={true}
              size={20}
              style={{ paddingRight: "5%" }}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("notification", {hydroId})}>
            <Icon name="bell" color={theme.basic} solid={true} size={20} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{ marginHorizontal: "5%", paddingLeft: "5%" }}
            onPress={() => navigation.navigate("settings", {address})}
          >
            <Icon name="cog" color={theme.basic} size={20} />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <WalletCard balance="0" address={address} cardName="Hydro Card" />
        </View>

        {/* <Button style={{ marginTop: "10%" }} text="Snowflake" onPress={() => navigation.navigate("snowflake")} /> */}

        {/* {identityAddress !== null ? (
          <>
            <Lead style={{ textAlign: "left", color: theme.primary, fontSize:20, paddingTop:10 }}>
              Identity Address
            </Lead>

            <TouchableOpacity
              onPress={CopyIdentityAddressClipboard}
              style={{
                padding: 10,
                backgroundColor: theme.secondary,
                marginTop: "5%",
              }}
            >
              <Paragraph style={{ color: theme.basic }}>
                
                {identityAddress}
              </Paragraph>
            </TouchableOpacity>
          </>
        ) : (
          <View
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button
              style={{ marginTop: "5%" }}
              text="Get Identity Address"
              onPress={getIdentityAddress}
            />
          </View>
        )} */}
        

        <Lead style={{ marginTop: "10%" }}>Tx Feed</Lead>
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <LottieView
            source={require('../../assets/tx.json')}
            autoPlay
            key={1}
            loop
            style={{ width: '60%', height: '100%', }}
          />
        </View>
        <Paragraph
          style={{
            textAlign: "center",
            fontWeight: "bold",
            fontSize: 22,
            marginTop: "30%",
          }}
        >
          You have no transaction record.
        </Paragraph>
        {/* <View
          style={{
            flex: 1,
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
          }}
        >
          {TxFeed.map((feedItem, id) => (
            <TxFeedCard {...feedItem} key={id} />
          ))}
        </View> */}
      </ScrollView>
      <TouchableOpacity
        onPress={() => navigation.navigate("transfer")}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginLeft: "80%",
          backgroundColor: theme.primary,
          width: 70,
          height: 70,
          borderRadius: 50,
          shadowColor: "#3FAC9D",
          shadowOffset: {
            width: 0,
            height: 12,
          },
          shadowOpacity: 0.58,
          shadowRadius: 16.0,
          marginTop: "-20%",
          marginBottom: "10%",
          elevation: 24,
        }}
      >
        <Icon name="plus" color={theme.buttonColor} size={28} />
      </TouchableOpacity>
    </BgView>
  );
};

export default Home;

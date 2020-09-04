import React, { useContext } from "react";
import { View, Image, ScrollView, TouchableOpacity } from "react-native";
import { BgView, Header } from "../../components/Layouts";
import { Paragraph, Lead } from "../../components/Typography";
import Icon from "react-native-vector-icons/FontAwesome5";
import { ThemeContext } from "../../hooks/useTheme";
import { TxFeedCard } from "../../components/cards";
const Home = () => {
  const TxFeed = [
    {
      image: require("../../assets/images/emma.jpg"),
      name: "Emma",
      amount: "10.091",
      currency: "bitcoin",
      amountEquivalent: "0.0001BTC",
      id: 1,
    },
    {
      image: require("../../assets/images/emma.jpg"),
      name: "Emma",
      amount: "10.091",
      currency: "bitcoin",
      amountEquivalent: "0.0001BTC",
      id: 2,
    },
    {
      image: require("../../assets/images/emma.jpg"),
      name: "Emma",
      amount: "10.091",
      currency: "bitcoin",
      amountEquivalent: "0.0001BTC",
      id: 3,
    },
    {
      image: require("../../assets/images/emma.jpg"),
      name: "Emma",
      amount: "10.091",
      currency: "bitcoin",
      amountEquivalent: "0.0001BTC",
      id: 4,
    },
    {
      image: require("../../assets/images/emma.jpg"),
      name: "Emma",
      amount: "10.091",
      currency: "bitcoin",
      amountEquivalent: "0.0001BTC",
      id: 5,
    },
    {
      image: require("../../assets/images/emma.jpg"),
      name: "Emma",
      amount: "10.091",
      currency: "bitcoin",
      amountEquivalent: "0.0001BTC",
      id: 6,
    },
    {
      image: require("../../assets/images/emma.jpg"),
      name: "Emma",
      amount: "10.091",
      currency: "bitcoin",
      amountEquivalent: "0.0001BTC",
      id: 7,
    },
    {
      image: require("../../assets/images/emma.jpg"),
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
            marginTop: "10%",
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
          <Icon name="bell" color={theme.basic} solid={true} size={20} />
          <Icon
            name="cog"
            color={theme.basic}
            size={20}
            style={{ marginHorizontal: "5%", paddingLeft: "5%" }}
          />
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
          <Image
            source={require("../../assets/images/emma.jpg")}
            style={{ borderRadius: 50, width: 100, height: 100 }}
          />
          <Paragraph style={{ marginTop: "2%", fontSize: 16 }}>
            Your Balance
          </Paragraph>
          <Lead style={{ fontSize: 20 }}> &#36; 222.22</Lead>
        </View>

        <Lead style={{ marginTop: "10%" }}>Tx Feed</Lead>
        <View
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
        </View>
      </ScrollView>
      <TouchableOpacity
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginLeft: '80%',
          backgroundColor: theme.primary,
          width: 70,
          height: 70,
          borderRadius: 50,
          shadowColor: '#3FAC9D',
          shadowOffset: {
            width: 0,
            height: 12,
          },
          shadowOpacity: 0.58,
          shadowRadius: 16.0,
          marginTop: '-20%',
          marginBottom: '10%',
          elevation: 24,
        }}>
        <Icon name="plus" color={theme.buttonColor} size={28} />
      </TouchableOpacity>
    </BgView>
  );
};

export default Home;

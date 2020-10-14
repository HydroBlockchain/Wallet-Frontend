import React from "react";
import { View, Image, ScrollView } from "react-native";
import { SecondaryBgView, SecondaryHeader } from "../../components/Layouts";
import { Paragraph } from "../../components/Typography";
import LottieView from 'lottie-react-native';
import {
  NotificationProfileCard,
  NotificationCard,
} from "../../components/cards";
import Button from "../../components/Button";

const Notification = ({ navigation, route }) => {

  const {hydroId} = route.params
  const NotificationDetails = [
    {
      image: require("../../assets/images/emma.png"),
      notificationInfo: "Incoming Transaction Found",
      value: "0.0001BTC",
      id: 1,
    },
    {
      image: require("../../assets/images/emma.png"),
      notificationInfo: "Incoming Transaction Found",
      amountEquivalent: "0.0001BTC",
      id: 2,
    },
    {
      image: require("../../assets/images/emma.png"),
      notificationInfo: "Incoming Transaction Found",
      amountEquivalent: "0.0001BTC",
      id: 3,
    },
    {
      image: require("../../assets/images/emma.png"),
      notificationInfo: "Incoming Transaction Found",
      notificationInfo: "Incoming Transaction Found",
      value: "0.0001BTC",
      id: 4,
    },
    {
      image: require("../../assets/images/emma.png"),
      notificationInfo: "Incoming Transaction Found",
      value: "0.0001BTC",
      id: 5,
    },
    {
      image: require("../../assets/images/emma.png"),
      notificationInfo: "Incoming Transaction Found",
      value: "0.0001BTC",
      id: 6,
    },
  ];
  return (
    <SecondaryBgView>
      <SecondaryHeader.Back
        title="Notification"
        onBackPress={navigation.goBack}
      />

      <NotificationProfileCard
        image={require("../../assets/images/emma.png")}
        hydroId={hydroId}
        userInfo="Information about the users account"
      />
       <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <LottieView
            source={require('../../assets/notif.json')}
            autoPlay
            key={1}
            loop
            style={{ width: '40%', height: '100%', }}
          />
        </View>
        <Paragraph
          style={{
            textAlign: "center",
            fontWeight: "bold",
            fontSize: 22,
            
          }}
        >
          You have no Notification
        </Paragraph>
      {/* <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
          }}
        >
          {NotificationDetails.map((notificationItem, id) => (
            <NotificationCard {...notificationItem} key={id} />
          ))}
        </View>
      </ScrollView> */}
    </SecondaryBgView>
  );
};

export default Notification;

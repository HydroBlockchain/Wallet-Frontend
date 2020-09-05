import React from "react";
import { View, Image, ScrollView } from "react-native";
import { SecondaryBgView, SecondaryHeader } from "../../components/Layouts";
import { Paragraph } from "../../components/Typography";
import {
  NotificationProfileCard,
  NotificationCard,
} from "../../components/cards";
import Button from "../../components/Button";

const Notification = ({ navigation }) => {
  const NotificationDetails = [
    {
      image: require("../../assets/images/emma.jpg"),
      notificationInfo: "Incoming Transaction Found",
      value: "0.0001BTC",
      id: 1,
    },
    {
      image: require("../../assets/images/emma.jpg"),
      notificationInfo: "Incoming Transaction Found",
      amountEquivalent: "0.0001BTC",
      id: 2,
    },
    {
      image: require("../../assets/images/emma.jpg"),
      notificationInfo: "Incoming Transaction Found",
      amountEquivalent: "0.0001BTC",
      id: 3,
    },
    {
      image: require("../../assets/images/emma.jpg"),
      notificationInfo: "Incoming Transaction Found",
      notificationInfo: "Incoming Transaction Found",
      value: "0.0001BTC",
      id: 4,
    },
    {
      image: require("../../assets/images/emma.jpg"),
      notificationInfo: "Incoming Transaction Found",
      value: "0.0001BTC",
      id: 5,
    },
    {
      image: require("../../assets/images/emma.jpg"),
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
        image={require("../../assets/images/emma.jpg")}
        hydroId="4b9b621d8e22E"
        userInfo="Information about the users account"
      />
      <ScrollView showsVerticalScrollIndicator={false}>
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
      </ScrollView>
    </SecondaryBgView>
  );
};

export default Notification;

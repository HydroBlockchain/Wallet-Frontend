import React, { useState, useContext } from "react";
import {
  View,
  Image,
  TouchableOpacity,
  Clipboard,
  ToastAndroid,
} from "react-native";
import { LabelInput } from "../../components/Forms";
import { BgView, Header } from "../../components/Layouts";
import { Paragraph, Lead } from "../../components/Typography";
import { ThemeContext } from "../../hooks/useTheme";
import Icon from "react-native-vector-icons/FontAwesome5";
import Button from "../../components/Button";

const Contact = ({ navigation }) => {
  const { isLightTheme, lightTheme, darkTheme } = useContext(ThemeContext);
  const theme = isLightTheme ? lightTheme : darkTheme;

  const hydroAddress = "0x9F1CA7955D40FF9798472a4b9b621d8e";

  const btcAddress = "38ECqrDguHdy1GZ5V2hSP3dt3HZSFfXZrM";

  const ethAddress = "0x931D387731bBbC988B312206c74F77D0";

  const CopyHydroAddressToClipboard = async () => {
    await Clipboard.setString(hydroAddress);
    ToastAndroid.show("Copied To Clipboard!", ToastAndroid.SHORT);
  };

  const CopyEthAddressToClipboard = async () => {
    await Clipboard.setString(ethAddress);
    ToastAndroid.show("Copied To Clipboard!", ToastAndroid.SHORT);
  };

  const CopyBtcAddressToClipboard = async () => {
    await Clipboard.setString(btcAddress);
    ToastAndroid.show("Copied To Clipboard!", ToastAndroid.SHORT);
  };

  return (
    <BgView>
      <Header.Back title="Contact Card" onBackPress={navigation.goBack} />
      <View
        style={{
          marginTop: "10%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TouchableOpacity>
          <Image
            source={require("../../assets/images/emma.jpg")}
            style={{ borderRadius: 50, width: 100, height: 100 }}
          />
        </TouchableOpacity>
        <Lead style={{ textAlign: "center", marginTop: "5%", fontSize: 20 }}>
          Emmanuel Njoku
        </Lead>
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "10%",
          }}
        >
          <View style={{ marginVertical: "2%" }}>
            <Lead>HYDRO</Lead>
            <TouchableOpacity
              style={{
                padding: 7,
                backgroundColor: theme.secondary,
                borderRadius: 20,
              }}
              onPress={CopyHydroAddressToClipboard}
            >
              <Paragraph>{hydroAddress}</Paragraph>
            </TouchableOpacity>
          </View>
          <View style={{ marginVertical: "2%" }}>
            <Lead>BTC</Lead>
            <TouchableOpacity
              style={{
                padding: 7,
                backgroundColor: theme.secondary,
                borderRadius: 20,
              }}
              onPress={CopyBtcAddressToClipboard}
            >
              <Paragraph style={{ textAlign: "center", fontSize: 14 }}>
                {btcAddress}
              </Paragraph>
            </TouchableOpacity>
          </View>
          <View style={{ marginVertical: "2%" }}>
            <Lead>ETH</Lead>
            <TouchableOpacity
              style={{
                padding: 7,
                backgroundColor: theme.secondary,
                borderRadius: 20,
              }}
              onPress={CopyEthAddressToClipboard}
            >
              <Paragraph style={{ textAlign: "center", fontSize: 14 }}>
                {ethAddress}
              </Paragraph>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View
        style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "flex-end",
          marginVertical: "20%",
          flexDirection: "row",
        }}
      >
        <TouchableOpacity>
          <Icon
            name="file-download"
            color={theme.basic}
            solid={true}
            size={22}
          />
        </TouchableOpacity>
        <TouchableOpacity style={{ marginHorizontal: "5%", paddingLeft: "5%" }}>
          <Icon name="paper-plane" color={theme.basic} solid={true} size={22} />
        </TouchableOpacity>
      </View>
    </BgView>
  );
};

export default Contact;

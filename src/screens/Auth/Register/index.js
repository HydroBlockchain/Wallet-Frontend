import React, { useState, useContext } from "react";
import { View, Image, Alert, KeyboardAvoidingView } from "react-native";
import { LabelInput } from "../../../components/Forms";
import SnowflakeContext from "../../../context/SnowFlake/snowflakeContext";
import { BgView, Header } from "../../../components/Layouts";
import { ThemeContext } from "../../../hooks/useTheme";
import Button from "../../../components/Button";
import { Paragraph, Lead } from "../../../components/Typography";
import AsyncStorage from "@react-native-community/async-storage";

const Register = ({ navigation }) => {
  const { isLightTheme, lightTheme, darkTheme } = useContext(ThemeContext);

  const theme = isLightTheme ? lightTheme : darkTheme;

  const snowflakeContext = useContext(SnowflakeContext);

  const {
    createDefaultAddress,
    defaultWalletData,
    walletError,
  } = snowflakeContext;

  const onSubmit = (e) => {
    e.preventDefault();

    createDefaultAddress()
      .then((walletData) => {
        let address = walletData[0].address;
        console.log(walletData)
        // AsyncStorage.setItem("address", address);

        navigation.navigate("permissions", { address });
      
      })
      .catch((err) => {
        Alert.alert(err.message);
      });
  };

  return (
    <BgView>
      <Image
        style={{ resizeMode: "center", width: "100%", height: "60%" }}
        source={require("../../../assets/images/wallet.png")}
      />

      <View style={{ marginTop: "10%" }}>
        <Paragraph>
          Create Default Wallet which would be used to create an ethereum
          Identity Number
        </Paragraph>
      </View>

      <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "10%",
        }}
      >
        <Button text="Create Wallet" onPress={onSubmit} />
      </View>
    </BgView>
  );
};

export default Register;

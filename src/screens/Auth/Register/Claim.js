import React, { useState, useContext, useEffect } from "react";
import { View, Text, Image, Dimensions, Platform, StatusBar, StyleSheet } from "react-native";
import SnowflakeContext from "../../../context/SnowFlake/snowflakeContext";
import { BgView, Header } from "../../../components/Layouts";
import { Paragraph, Lead } from "../../../components/Typography";
import Button from "../../../components/Button";
import w3s from "../../../libs/Web3Service";
const { height, width } = Dimensions.get('window');

const Claim = ({ route, navigation }) => {
  const { hydroId, signature, address, timestamp } = route.params;

  const snowflakeContext = useContext(SnowflakeContext);

  const { createIdentity, ein } = snowflakeContext;
  console.log(signature);
  console.log(ein);
  console.log(hydroId);
  console.log(timestamp);

  const onSubmit = (e) => {
    e.preventDefault();
    createIdentity(timestamp, signature, hydroId, address);
    navigation.navigate("app", { screen: "home", params: { address, hydroId } });
    console.log(address);
  };

  return (
    <BgView>
      <Header.Back onBackPress={navigation.goBack} title="Claim Identity" containerStyle={styles.header} />

      <View style={styles.container}>

        <Image style={styles.collect} source={require("../../../assets/images/collect.png")} />

        <Paragraph style={styles.paragraph}>
          Almost there, just click below to claim your new on-chain Snowflake
          identity (EIN)!
        </Paragraph>

        <View style={styles.buttonContainer}>
          <Button
            style={{ marginTop: "10%" }}
            text="Claim Identity"
            onPress={onSubmit}
          />
        </View>
      </View>

    </BgView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },

  header: {
    marginTop: Platform.OS == 'ios' ? 0 : StatusBar.currentHeight,
    paddingTop: 0,
    height: 50
  },

  collect: {
    resizeMode: 'contain',
    width: width * 0.8,
    height: width * 0.9
  },

  paragraph: {
    textAlign: "center",
    paddingHorizontal: width * 0.05
  },

  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: width * 0.1,
    width: width,
  }
})

export default Claim;

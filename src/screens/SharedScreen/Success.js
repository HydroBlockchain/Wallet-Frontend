import React, { useState, useContext } from "react";
import { View, Image } from "react-native";
import { LabelInput } from "../../components/Forms";
import { BgView, Header } from "../../components/Layouts";
import { Paragraph, Lead } from "../../components/Typography";
import { ThemeContext } from "../../hooks/useTheme";
import Button from "../../components/Button";

const Success = ({ navigation }) => {
  return (
    <BgView>
      <Header.Back title="Success" onBackPress={navigation.goBack} />
      <View
        style={{
          marginTop: "10%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          source={require("../../assets/images/success2.png")}
          style={{ resizeMode: "contain", width: "100%", height: "50%" }}
        />
        <Paragraph
          style={{ marginVertical: "10%", textAlign: "center", fontSize: 18 }}
        >
          Great! Your Transaction is Being Processed
        </Paragraph>

        <Button
          text="View Transaction Card"
          onPress={() => navigation.navigate("txCard")}
        />
      </View>
    </BgView>
  );
};

export default Success;

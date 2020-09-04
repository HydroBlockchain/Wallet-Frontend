import React from "react";
import { View, Image } from "react-native";
import { BgView } from "../../components/Layouts";
import { Paragraph } from "../../components/Typography";
import Button from "../../components/Button";
const AuthLanding = ({ navigation }) => {
  return (
    <BgView>
      <View style={{ marginTop: "10%" }}>
        <Image
          style={{ resizeMode: "contain", width: "100%" }}
          source={require("../../assets/images/logo.png")}
        />
      </View>
      <View style={{ marginTop: "20%" }}>
        <Image
          style={{ resizeMode: "contain", width: "100%" }}
          source={require("../../assets/images/mist.png")}
        />
      </View>
      <Paragraph style={{ textAlign: "center", marginTop: "10%" }}>
        Register now to create your digital identity, transact and use the hydro
        protocols to secure who you are online.
      </Paragraph>
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "20%",
        }}
      >
        <Button
          text="Register"
          onPress={() => navigation.navigate("register")}
        />

        <Button text="Recover" style={{ marginTop: "10%" }} />
      </View>
    </BgView>
  );
};

export default AuthLanding;

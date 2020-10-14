import React, { useState, useContext, useEffect } from "react";
import { View, Text, Alert, Image, KeyboardAvoidingView } from "react-native";
import SnowflakeContext from "../../../context/SnowFlake/snowflakeContext";
import { LabelInput } from "../../../components/Forms/index";
import { BgView, Header } from "../../../components/Layouts";
import { Paragraph, Lead } from "../../../components/Typography";
import Button from "../../../components/Button";
import w3s from "../../../libs/Web3Service";

const Permissions = ({ route, navigation }) => {
  const [timestamp] = useState(Math.round(new Date() / 1000) - 120);

  const [hydro, setHydroId] = useState({ hydroId: "" });

  const { hydroId } = hydro;

  const [fulfilledCalled, setFulfilled] = useState(false);

  const handleChange = (field) => (value) => {
    setHydroId({ ...hydro, [field]: value });
  };

  const { address } = route.params;

  const snowflakeContext = useContext(SnowflakeContext);

  const {
    createSignedMessage,
    signature,
    isHydroIdAvailable,
    hydroIDAvailable,
  } = snowflakeContext;
  console.log(signature);

  console.log(timestamp);

  //handle input data
  useEffect(() => {
    setFulfilled(true);

    if (fulfilledCalled && [hydroId.length === 6]) {
      isHydroIdAvailable(hydroId);
    }
  }, [fulfilledCalled, hydroId]);

  useEffect(() => {
    w3s.initContract();
  }, []);

  console.log(`default address created ${address}`);

  console.log(hydroIDAvailable);

  const onSubmit = (e) => {
    e.preventDefault();

    if (hydroId === "") {
      Alert.alert("Enter your hydro id");
    } else {
      createSignedMessage(timestamp, address);

      navigation.navigate("claim", { hydroId, signature, address, timestamp });
    }
  };
  return (
    <BgView>
      <Header.Back onBackPress={navigation.goBack} title="Permission" />

      <Image
        style={{
          resizeMode: "contain",
          width: "100%",
          height: "30%",
          marginBottom: "20%",
          alignSelf: "center",
        }}
        source={require("../../../assets/images/permissions.png")}
      />
      <KeyboardAvoidingView>
        <LabelInput
          label="Hydro ID"
          value={hydro.hydroId}
          placeholder="Hydro Id"
          onChangeText={handleChange("hydroId")}
        />
      </KeyboardAvoidingView>
      <View
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Paragraph style={{ textAlign: "center" }}>
          This step is for you to create your Hydro ID and give us permission to
          create your account on the blockchain. This requires your signature of
          a hashed permission string
        </Paragraph>
        <Button style={{ marginTop: "10%" }} text="Accept" onPress={onSubmit} />
      </View>
    </BgView>
  );
};

export default Permissions;

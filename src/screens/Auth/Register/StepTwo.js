import React, { useState, useContext } from "react";
import { View, Image, KeyboardAvoidingView } from "react-native";
import { LabelInput } from "../../../components/Forms";

const StepTwo = () => {
  const [stepTwoDetails, setStepTwoDetails] = useState({
    ethereumAddress: "",
    hydroId: "",
    password: "",
  });
  const { ethereumAddress, hydroId, password } = stepTwoDetails;
  return (
    <KeyboardAvoidingView>
      <LabelInput
        label="Ethereum Address"
        placeholder="0x9F1CA7955D40FF9798472a4b9b621d8e"
        value={ethereumAddress}
        onChangeText={(value) => {
          setStepTwoDetails(value);
        }}
      />
      <LabelInput
        label="Hydro ID"
        placeholder="4b9b621d8e22E"
        value={hydroId}
        onChangeText={(value) => {
          setStepTwoDetails(value);
        }}
      />
      <LabelInput
        label="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={(value) => {
          setStepTwoDetails(value);
        }}
      />
    </KeyboardAvoidingView>
  );
};

export default StepTwo;

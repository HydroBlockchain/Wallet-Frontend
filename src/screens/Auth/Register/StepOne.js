import React, { useState, useContext } from "react";
import { View, Image, KeyboardAvoidingView } from "react-native";
import { LabelInput } from "../../../components/Forms";

const StepOne = () => {
  const [stepOneDetails, setStepOneDetails] = useState({
    email: "",
    phoneNumber: "",
  });
  const { email, phoneNumber } = stepOneDetails;
  return (
    <KeyboardAvoidingView>
      <LabelInput
        label="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={(value) => {
          setStepOneDetails(value);
        }}
      />
      <LabelInput
        label="Phone Number"
        keyboardType="phone-pad"
        value={phoneNumber}
        onChangeText={(value) => {
          setStepOneDetails(value);
        }}
      />
    </KeyboardAvoidingView>
  );
};
export default StepOne;

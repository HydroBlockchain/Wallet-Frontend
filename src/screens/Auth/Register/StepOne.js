import React, { useState, useContext } from "react";
import { View, Image, KeyboardAvoidingView } from "react-native";
import { LabelInput } from "../../../components/Forms";
import { Paragraph } from "../../../components/Typography";

const StepOne = ({ formData, handleChange, ...props }) => {
  return (
    <KeyboardAvoidingView>
      <LabelInput
        label="Hydro ID"
        value={formData.hydroId}
        onChangeText={handleChange("hydroId")}
      />

      <Paragraph>
        Enter your Hydro ID below. This is a public, on-chain identifier that
        will be linked to and identify your account while creating a wallet.
        Think of it like a user ID. You can either make this up or use the ID
        assigned to you in the Hydro mobile app
      </Paragraph>
    </KeyboardAvoidingView>
  );
};
export default StepOne;

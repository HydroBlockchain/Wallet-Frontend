import React, { useState, useContext } from "react";
import { View, Image, KeyboardAvoidingView } from "react-native";
import { BgView, Header } from "../../components/Layouts";
import Button from "../../components/Button";
import { Paragraph, Lead } from "../../components/Typography";
import { LabelInput } from "../../components/Forms";
const Register = ({ navigation }) => {
  const pages = [<StepOne />, <StepTwo />];
  const [page, setPage] = useState(0);
  const nextPage = () => {
    setPage(page + 1);
  };
  const previousPage = () => {
    setPage(+page - 1);
  };

  return (
    <BgView>
      {pages !== 0 ? <Header.Back onBackPress={previousPage} /> : null}
      <View style={{ marginTop: "2%" }}>
        <Image
          style={{ resizeMode: "contain" }}
          source={require("../../assets/images/logo.png")}
        />
      </View>
      <View style={{ marginTop: "10%" }}>{pages[page]}</View>
      <Paragraph style={{ marginVertical: "10%", textAlign: "center" }}>
        Info text about what is happening on chain and off chain when creating
        account.
      </Paragraph>
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "10%",
        }}
      >
        {pages !== 1 ? (
          <Button text="Next" onPress={nextPage} />
        ) : (
          <Button text="Done" onPress={() => navigation.navigate("login")} />
        )}
      </View>
    </BgView>
  );
};

export const StepOne = () => {
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
export const StepTwo = () => {
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

export default Register;

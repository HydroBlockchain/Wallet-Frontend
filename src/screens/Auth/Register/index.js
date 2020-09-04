import React, { useState, useContext } from "react";
import { View, Image } from "react-native";
import { BgView, Header } from "../../../components/Layouts";
import Button from "../../../components/Button";
import { Paragraph, Lead } from "../../../components/Typography";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";

const pages = [<StepOne />, <StepTwo />];
const Register = ({ navigation }) => {
  const [page, setPage] = useState(0);
  const nextPage = () => {
    setPage(page + 1);
  };
  const previousPage = () => {
    setPage(page - 1);
  };

  return (
    <BgView>
      {page !== 0 ? <Header.Back onBackPress={previousPage} /> : null}
      <View style={{ marginTop: "10%" }}>
        <Image
          style={{ resizeMode: "contain" }}
          source={require("../../../assets/images/logo.png")}
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
        {page !== 1 ? (
          <Button text="Next" onPress={nextPage} />
        ) : (
          <Button text="Done" onPress={() => navigation.navigate("login")} />
        )}
      </View>
    </BgView>
  );
};

export default Register;

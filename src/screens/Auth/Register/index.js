import React, { useState, useContext } from "react";
import { View, Image, KeyboardAvoidingView } from "react-native";
import { LabelInput } from "../../../components/Forms";
import SnowflakeContext from "../../../context/SnowFlake/snowflakeContext";
import { BgView, Header } from "../../../components/Layouts";
import { ThemeContext } from "../../../hooks/useTheme";
import Button from "../../../components/Button";
import { Paragraph, Lead } from "../../../components/Typography";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";

const Register = ({ navigation }) => {
  const { isLightTheme, lightTheme, darkTheme } = useContext(ThemeContext);
  const theme = isLightTheme ? lightTheme : darkTheme;

  const snowflakeContext = useContext(SnowflakeContext);

  const { isHydroIdAvailable, hydroIDAvailable } = snowflakeContext;

  const [hydroId, setHydroId] = useState("");

  const [isHydroIdValidated, setIsHydroIdValidated] = useState(false);

  function updateAndCheck(idToCheck) {
    setHydroId(idToCheck);
    setIsHydroIdValidated(false);

    if (idToCheck.length == 6) {
      isHydroIdAvailable(idToCheck)
        .then((hydroIDAvailable) => {
          setIsHydroIdValidated(hydroIDAvailable);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  return (
    <BgView>
      <View style={{ marginTop: "10%" }}>
        <Image
          style={{ resizeMode: "contain" }}
          source={require("../../../assets/images/logo.png")}
        />
      </View>
      <View style={{ marginTop: "10%" }}>
        <KeyboardAvoidingView>
          <LabelInput
            label="Hydro ID"
            value={hydroId}
            onChangeText={(hydroId) => updateAndCheck(hydroId)}
          />
         

          <Paragraph>
            Enter your Hydro ID below. This is a public, on-chain identifier
            that will be linked to and identify your account while creating a
            wallet. Think of it like a user ID. You can either make this up or
            use the ID assigned to you in the Hydro mobile app
          </Paragraph>
        </KeyboardAvoidingView>
      </View>

      <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "10%",
        }}
      >
        <Button text="Done" onPress={() => navigation.navigate("app")} />
      </View>
    </BgView>
  );
};

export default Register;

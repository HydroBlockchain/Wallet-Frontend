import React, {useContext, useEffect} from "react";
import { View, Image } from "react-native";
import { BgView } from "../../components/Layouts";
import { Paragraph, Lead } from "../../components/Typography";
import Button from "../../components/Button";
import SnowflakeContext from "../../context/SnowFlake/snowflakeContext";

const AuthLanding = ({ navigation }) => {

  const snowflakeContext = useContext(SnowflakeContext);

  const { getHydroAddress, error, hydroAddress } = snowflakeContext;

  useEffect(() => {
    getHydroAddress;
  }, [getHydroAddress]);

  const onGenerateAddress = () => {

    getHydroAddress

    navigation.navigate('app')

    if(!error && hydroAddress !== null){
  
  }else{
    console.log(error)
  }
  }
  console.log(`this is the ${hydroAddress}`)
  return (
    <BgView>
      <View style={{ marginTop: "10%" }}>
        <Image
          style={{ resizeMode: "contain", width: "100%" }}
          source={require("../../assets/images/logo.png")}
        />
      </View>
      <Lead style={{ textAlign: "center" }}>(Alpha Test Version)</Lead>
      <View style={{ marginTop: "10%" }}>
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
          marginVertical: "20%",
        }}
      >
        <Button
          text="Generate Address"
          onPress={()=>{onGenerateAddress()}}
        />

        <Button text="Recover" style={{ marginTop: "10%" }} />
      </View>
    </BgView>
  );
};

export default AuthLanding;

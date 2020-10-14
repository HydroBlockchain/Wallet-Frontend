import React, { useState, useContext } from "react";
import { View, Image,Alert, KeyboardAvoidingView } from "react-native";
import { LabelInput } from "../../../components/Forms";
import SnowflakeContext from "../../../context/SnowFlake/snowflakeContext";
import { BgView, Header } from "../../../components/Layouts";
import { ThemeContext } from "../../../hooks/useTheme";
import Button from "../../../components/Button";
import { Paragraph, Lead } from "../../../components/Typography";

const Register = ({ navigation }) => {
  const { isLightTheme, lightTheme, darkTheme } = useContext(ThemeContext);

  const theme = isLightTheme ? lightTheme : darkTheme;

  const snowflakeContext = useContext(SnowflakeContext);

  const {createDefaultAddress, defaultWalletData, walletError} = snowflakeContext

  const onSubmit = (e) => {
    e.preventDefault()

    createDefaultAddress();
    
    
    if(!walletError){
    
      let data = defaultWalletData

    // for (let property in data){
    //   let address = data[property].address
    //   console.log(address)
    //   navigation.navigate('permissions', {address})
    // }
    let address = data[0].address
      console.log(address)
     navigation.navigate('permissions', {address})
    }else{

      Alert.alert(walletError)
    
    }

  }

  return (
    <BgView>
      
        <Image
          style={{ resizeMode: "center", width:"100%", height:"60%" }}
          source={require("../../../assets/images/wallet.png")}
        />
      
      <View style={{ marginTop: "10%" }}>
       
          <Paragraph>
           Create Default Wallet which would be used to create an ethereum Identity Number
          </Paragraph>
       
      </View>

      <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "10%",
        }}
      >
        <Button text="Create Wallet" onPress={onSubmit}/>
      </View>
    </BgView>
  );
};

export default Register;

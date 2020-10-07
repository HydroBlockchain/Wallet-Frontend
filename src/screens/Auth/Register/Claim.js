import React, {useState, useContext, useEffect} from "react";
import { View, Text, Image } from "react-native";
import SnowflakeContext from "../../../context/SnowFlake/snowflakeContext"
import { BgView, Header } from "../../../components/Layouts";
import { Paragraph, Lead } from "../../../components/Typography";
import Button from "../../../components/Button";
import w3s from "../../../libs/Web3Service"

const Claim = ({ route }) => {

    const { hydroId, timestamp } = route.params;
    
    const snowflakeContext = useContext(SnowflakeContext);

    const {createIdentity, signature} = snowflakeContext
    console.log(signature)
    console.log(hydroId);
    console.log(timestamp)
    
    const onSubmit = (e) => {
        e.preventDefault()
        createIdentity(timestamp, signature, hydroId)
    }
  return (
    <BgView>
      <Header.Back title="Claim Identity" />
      <View
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          style={{
            resizeMode: "contain",
            width: "100%",
            height: "50%",
            marginBottom: "20%",
            alignSelf: "center",
          }}
          source={require("../../../assets/images/collect.png")}
        />
      
      <Paragraph style={{textAlign:'center'}}>
        This step is for you to give us permission to create your account on
        the blockchain. This requires your signature of a hashed permission
        string
      </Paragraph>
      <Button style={{marginTop:'10%'}} text="Claim Identity" onPress={onSubmit} />
      </View>
    </BgView>
  );
};

export default Claim;

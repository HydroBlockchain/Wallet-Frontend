import React, {useState, useContext, useEffect} from "react";
import { View, Text, Image } from "react-native";
import SnowflakeContext from "../../../context/SnowFlake/snowflakeContext"
import { BgView, Header } from "../../../components/Layouts";
import { Paragraph, Lead } from "../../../components/Typography";
import Button from "../../../components/Button";
import w3s from "../../../libs/Web3Service"

const Permissions = ({ route }) => {

    const [timestamp] = useState(Math.round(new Date() / 1000) - 120);

    const { hydroId } = route.params;
    
    const snowflakeContext = useContext(SnowflakeContext);

    const {createSignature, signature} = snowflakeContext
    console.log(signature)
    console.log(hydroId);
    console.log(timestamp)
    w3s.web3.eth.getAccounts().then(console.log)
    useEffect(() => {
        w3s.initContract();
      }, []);

    const onSubmit = (e) => {
        e.preventDefault()

        createSignature(timestamp, w3s.web3.eth.account, w3s.web3.library)
    }
  return (
    <BgView>
      <Header.Back title="Permission" />
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
          source={require("../../../assets/images/permissions.png")}
        />
      
      <Paragraph style={{textAlign:'center'}}>
        This step is for you to give us permission to create your account on
        the blockchain. This requires your signature of a hashed permission
        string
      </Paragraph>
      <Button style={{marginTop:'10%'}} text="Accept" onPress={onSubmit} />
      </View>
    </BgView>
  );
};

export default Permissions;

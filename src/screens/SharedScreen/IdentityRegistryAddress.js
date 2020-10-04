import React, { useState, useEffect, useContext } from 'react';
import {
    View,
    ScrollView,
    KeyboardAvoidingView,
    Clipboard, ToastAndroid,
    Text
} from "react-native";
import { LabelInput } from "../../components/Forms";
import { BgView, Header } from "../../components/Layouts";
import Button from "../../components/Button";
import {Lead, Paragraph} from '../../components/Typography'
import { ThemeContext } from "../../hooks/useTheme";
import { SettingsCard, SettingsItemCard } from "../../components/cards";
import w3s from '../../libs/Web3Service';

const  IdentityRegistryAddress = ({navigation}) => {

    const { isLightTheme, lightTheme, darkTheme } = useContext(ThemeContext);

    const theme = isLightTheme ? lightTheme : darkTheme;

    const [state, setState] = useState({address: '', isError:false, error:''})
    
    const {address, isError, error} = state
    

    useEffect(() => {
        w3s.initContract();
        getIdentityAddress
     },[] )
        
    

  

    const getIdentityAddress = async () => {
        try {
            console.log("[LOAD TOKEN]")
            const myContract = await w3s.createContract();
            console.log(myContract, "myContract");
            const address = await myContract.methods.identityRegistryAddress().call()
            console.log(`identity : ${address}`)
            // this.setState({ address });
        }
        catch (ex) {
            console.log(`this is ex full error object ${ex}`)
            await setState({...state, isError: true })
            if (ex.message)
                await setState({...state, error: ex.message })
        }

    }
    console.log(address)

    const CopyToClipboard = async () => {
        await Clipboard.setString(address);
        ToastAndroid.show("Copied To Clipboard!", ToastAndroid.SHORT);
      };



        return (
            <BgView>
                <Header.Back title="Identity Registry Address" onBackPress={navigation.goBack} />
                <ScrollView>
                    <KeyboardAvoidingView>
                        <View
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                marginTop: "10%",
                                marginBottom: "10%",
                            }}
                        >
                            <Button text="Get Address" onPress={getIdentityAddress} />
                        </View>
                        <Lead style={{ fontWeight: "300", fontSize: 14, marginBottom: 4 }}>
        Identity Registry Address
      </Lead>
                        <View  style={{
        borderRadius: 16,
        marginBottom: 15,
        backgroundColor: theme.secondary,
        fontFamily: "Rubik-Regular",
        color: theme.basic,
        fontSize: 16,
        padding: 15,
                        }}> 
                        <Paragraph style={{color:theme.basic}}> {address}</Paragraph>
                            
                        </View>

                        {isError &&
                            <Text style={{ color: 'red' }}>
                                Error : {error}
                            </Text>
                        }
                    </KeyboardAvoidingView>
                </ScrollView>
            </BgView>
        );
    }


export default IdentityRegistryAddress;
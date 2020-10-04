import React, { Component } from 'react';
import {
    View,
    ScrollView,
    KeyboardAvoidingView,
    Text
} from "react-native";
import { LabelInput } from "../../components/Forms";
import { BgView, Header } from "../../components/Layouts";
import Button from "../../components/Button";
import w3s from '../../libs/Web3Service';

class IdentityRegistryAddress extends Component {
    state = {
        address: "",
        isError: false,
        error: ""
    }
    componentDidMount() {
        w3s.initContract()
    }
    loadToken = async () => {
        try {
            console.log("[LOAD TOKEN]")
            const myContract = await w3s.createContract();
            console.log(myContract, "myContract");
            let address = await myContract.methods.identityRegistryAddress().call()
            console.log(address)
            // this.setState({ address });
        }
        catch (ex) {
            console.log(`this is ex full error object ${ex}`)
            await this.setState({ isError: true })
            if (ex.message)
                await this.setState({ error: ex.message })
        }

    }
    render() {
        return (
            <BgView>
                <Header.Back title="Identity Registry Address" onBackPress={this.props.navigation.goBack} />
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
                            <Button text="Get Address" onPress={this.loadToken} />
                        </View>

                        <LabelInput
                            label="Identity Registry Address"
                            placeholder="dentity Registry Address"
                            value={this.state.address}
                            onChangeText={(value) => {
                                console.log(value)
                            }}
                        />

                        {this.state.isError &&
                            <Text style={{ color: 'red' }}>
                                Error : {this.state.error}
                            </Text>
                        }
                    </KeyboardAvoidingView>
                </ScrollView>
            </BgView>
        );
    }
}

export default IdentityRegistryAddress;
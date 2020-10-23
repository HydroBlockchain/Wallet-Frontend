import React, { Component } from 'react';
import {
    View,
    ScrollView,
    KeyboardAvoidingView,
    AsyncStorage,
    ToastAndroid
} from "react-native";
import { LabelInput } from "../../../components/Forms";
import { BgView, Header } from "../../../components/Layouts";
import Button from "../../../components/Button";

class AddCustomToken extends Component {
    state = {
        contractAddress: "",
        decimals: "",
        symbol: ""
    }
    addCustomToken = async () => {
        if (!this.state.contractAddress)
            return ToastAndroid.show("Contract Address Is Required", ToastAndroid.LONG);
        if (!this.state.symbol)
            return ToastAndroid.show("Symbol Is Required", ToastAndroid.LONG);
        if (!this.state.decimals)
            return ToastAndroid.show("Decimals Is Required", ToastAndroid.LONG);
        let objCustomToken = {
            contractAddress: this.state.contractAddress,
            decimals: this.state.decimals,
            symbol: this.state.symbol
        }
        await AsyncStorage.setItem("customToken", JSON.stringify(objCustomToken))
        this.props.navigation.goBack()

    }
    render() {
        return (
            <BgView>
                <Header.Back title="Add Custom Token" onBackPress={this.props.navigation.goBack} />
                <ScrollView>
                    <KeyboardAvoidingView>
                        <LabelInput
                            label="Contact Address"
                            placeholder="Contact Address"
                            value={this.state.contractAddress}
                            onChangeText={(value) => this.setState({ contractAddress: value })}
                        />
                        <LabelInput
                            label="Symbol"
                            placeholder="Symbol"
                            value={this.state.symbol}
                            onChangeText={(value) => this.setState({ symbol: value })}
                        />
                        <LabelInput
                            label="Decimals"
                            placeholder="Decimals"
                            value={this.state.decimals}
                            onChangeText={(value) => this.setState({ decimals: value })}
                        />

                        <View
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                marginTop: "10%",
                                marginBottom: "10%",
                            }}
                        >
                            <Button text="Add Token" onPress={this.addCustomToken} />
                        </View>
                    </KeyboardAvoidingView>
                </ScrollView>
            </BgView>
        );
    }
}

export default AddCustomToken;
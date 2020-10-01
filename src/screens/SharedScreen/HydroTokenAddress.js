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

class HydroTokenAddress extends Component {
    state = {
        token: "",
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
            let token = await myContract.methods.hydroTokenAddress().call()
            console.log(token)
            // this.setState({ token });
        }
        catch (ex) {
            console.log(ex)
            await this.setState({ isError: true })
            if (ex.message)
                await this.setState({ error: ex.message })
        }

    }
    render() {
        return (
            <BgView>
                <Header.Back title="Hydro Token Address" onBackPress={this.props.navigation.goBack} />
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
                            <Button text="Load Token" onPress={this.loadToken} />
                        </View>

                        <LabelInput
                            label="Hydro Token Address"
                            placeholder="Hydro Token Address"
                            value={this.state.token}
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

export default HydroTokenAddress;
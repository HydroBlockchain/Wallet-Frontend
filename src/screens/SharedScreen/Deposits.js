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

class Deposits extends Component {
    state = {
        uint256: "",
        isError: false,
        isSuccess: false,
        error: ""
    }
    componentDidMount() {
        w3s.initContract()
    }
    deposit = async () => {
        try {
            if (!this.state.uint256) {
                await this.setState({ isError: true, error: "uint256 must required!" })
                return
            }
            else {
                await this.setState({ isError: false })
            }

            console.log("[LOAD TOKEN]")
            const myContract = await w3s.createContract();
            console.log(myContract, "myContract");
            let token = await myContract.methods.deposits(this.state.uint256).call()
            console.log(token)
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
                <Header.Back title="Deposits" onBackPress={this.props.navigation.goBack} />
                <ScrollView>
                    <KeyboardAvoidingView>

                        <LabelInput
                            label="uint256"
                            placeholder="uint256"
                            value={this.state.uint256}
                            onChangeText={(value) => {
                                console.log(value)
                                this.setState({ uint256: value })
                            }}
                        />

                        {this.state.isError &&
                            <Text style={{ color: 'red' }}>
                                Error : {this.state.error}
                            </Text>
                        }
                        {this.state.isSuccess &&
                            <Text style={{ color: 'green' }}>
                                Deposit Successfully !
                            </Text>
                        }
                        <View
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                marginTop: "10%",
                                marginBottom: "10%",
                            }}
                        >
                            <Button text="Deposit" onPress={this.deposit} />
                        </View>
                    </KeyboardAvoidingView>
                </ScrollView>
            </BgView>
        );
    }
}

export default Deposits;
import React, { Component } from 'react';
import {
    View,
    ScrollView,
    KeyboardAvoidingView,
    Text
} from "react-native";
import { LabelInput } from "../../../components/Forms";
import { BgView, Header } from "../../../components/Layouts";
import Button from "../../../components/Button";
import w3s from '../../../libs/Web3Service';
import Web3 from 'web3';
import { toWei } from '../../../libs/format';


const _spender = "0xB0D5a36733886a4c5597849a05B315626aF5222E"


class Withdraw extends Component {
    state = {
        addressTo: "",
        amount: "",
        isError: false,
        isSuccess: false,
        error: ""
    }
    async componentDidMount() {
        try {
            await w3s.initContract()
            if (this.props.route.params.walletToken) {
                this.setState({ addressTo: this.props.route.params.walletToken })
            }
        }
        catch (ex) {
            console.log(ex)
        }
    }

    withdraw = async () => {
        try {
            if (!this.state.addressTo) {
                await this.setState({ isError: true, error: "To Address must required!" })
                return
            }
            else if (!this.state.amount) {
                await this.setState({ isError: true, error: "amount must required!" })
                return
            }
            else {
                await this.setState({ isError: false })
            }


            const myContract = await w3s.createSnowflakeContract();
            console.log(toWei(this.state.amount.toString()), "myContract.methods");
            let token = await myContract.methods.withdrawSnowflakeBalance(this.state.addressTo, toWei(this.state.amount.toString())).send({
                from: this.state.addressTo
            })
            console.log(token, "token")
            this.setState({ isSuccess: true, addressTo: "", amount: "" })
            setTimeout(() => {
                this.setState({ isSuccess: false })
            }, 5000)
        }
        catch (ex) {
            console.log(ex)
            await this.setState({ isError: true })
            if (ex.message)
                await this.setState({ error: ex.message })
        }

    }
    render() {
        console.log(this.props.route.params.walletToken, "Props")
        return (
            <BgView>
                <Header.Back title="Withdraw" onBackPress={this.props.navigation.goBack} />
                <ScrollView>
                    <KeyboardAvoidingView>
                        <LabelInput
                            label="To Address"
                            placeholder="To Address"
                            value={this.state.addressTo}
                            onChangeText={(value) => this.setState({ addressTo: value })}
                        />
                        <LabelInput
                            label="amount"
                            placeholder="uint256"
                            value={this.state.amount}
                            onChangeText={(value) => {
                                console.log(value)
                                this.setState({ amount: value })
                            }}
                        />
                        {this.state.isError &&
                            <Text style={{ color: 'red' }}>
                                Error : {this.state.error}
                            </Text>
                        }
                        {this.state.isSuccess &&
                            <Text style={{ color: 'green' }}>
                                Withdraw Successfully !
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
                            <Button text="Withdraw" onPress={this.withdraw} />
                        </View>
                    </KeyboardAvoidingView>
                </ScrollView>
            </BgView>
        );
    }
}

export default Withdraw;
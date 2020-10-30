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

const _spender = "0xB0D5a36733886a4c5597849a05B315626aF5222E"

class Deposits extends Component {
    state = {
        amount: "",
        comments: "",
        isError: false,
        isSuccess: false,
        error: ""
    }
    componentDidMount() {
        w3s.initContract()
    }
    deposit = async () => {
        try {
            if (!this.state.amount) {
                await this.setState({ isError: true, error: "uint256 must required!" })
                return
            }
            else {
                await this.setState({ isError: false })
            }

            console.log("[LOAD TOKEN]")
            const myContract = await w3s.createHydroTokenContract();
            console.log(myContract, "myContract");
            console.log(_spender, "_spender");
            console.log(this.state.amount, "amount");
            console.log(this.state.comments, "comments");

            let token = await myContract.methods.approveAndCall(_spender, this.state.amount, this.state.comments).call()
            console.log(token, "Deposit")
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
                            label="Amount"
                            placeholder="uint256"
                            value={this.state.amount}
                            onChangeText={(value) => {
                                console.log(value)
                                this.setState({ amount: value })
                            }}
                        />
                        <LabelInput
                            label="Comments"
                            placeholder="Comments"
                            value={this.state.comments}
                            onChangeText={(value) => {
                                console.log(value)
                                this.setState({ comments: value })
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
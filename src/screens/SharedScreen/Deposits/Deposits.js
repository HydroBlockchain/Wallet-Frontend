import React, { Component } from 'react';
import {
    View,
    ScrollView,
    KeyboardAvoidingView,
    Text,
    Dimensions,
    Linking,
    TouchableHighlight,
    PermissionsAndroid,
    Platform,
    StatusBar, StyleSheet, SafeAreaView, Clipboard, ToastAndroid,
} from "react-native";
import { LabelInput } from "../../../components/Forms";
import { BgView, Header } from "../../../components/Layouts";
import Button from "../../../components/Button/index";
import w3s from '../../../libs/Web3Service';
import { toWei } from '../../../libs/format';
import Web3 from 'web3';
import HydroToken from '../../../contracts/HydroToken.json'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { ThemeProvider } from '@react-navigation/native';
import { ethers, } from 'ethers';
import { Value } from 'react-native-reanimated';
import AsyncStorage from "@react-native-community/async-storage";
import { DepositCard, } from "../../../components/cards";
import QRCode from 'react-native-qrcode-svg';
const { height, width } = Dimensions.get('window');
//const Web3 = require("web3")

const _spender = "0xB0D5a36733886a4c5597849a05B315626aF5222E";

class Deposits extends Component {
    state = {
        hydroaddress: "",
        amount: "",
        comments: "",
        isError: false,
        isSuccess: false,
        error: "",
        qrvalue: '',
        privatekeyValue: '',
        OpenScanner: false,
        test: "0xf879808609184e72a00082271094b0d5a36733886a4c5597849a05b315626af5222e809450a867b59c3be0123179a7fbbf0710bb5ff6d2dd1ca0e093606c41099c9b67e0b7942dfc29ea0513ec5a3b0a31f52111aaf202392950a00df61566839009751946fcdde031e346e212c45798ba5f2e1e55931d3544eb5c",

    }

    componentDidMount() {
        w3s.initContract()
        this.retrieveData()
        // const web3Provider = window.web3 ? window.web3.currentProvider : null;

        // this.web3 = web3Provider
        //     ? new Web3(web3Provider)
        //     : new Web3(new Web3.providers.HttpProvider('https://rinkeby.infura.io/v3/75cc8cba22ab40b9bfa7406ae9b69a27'));

        // this.web3.eth.defaultAccount = this.web3.eth.accounts[0];
    }
    retrieveData = async () => {
        try {
            const value = await AsyncStorage.getItem('@private_key');
            this.setState({ privatekeyValue: value })
            // console.log('pk---', this.state.privatekeyValue)
            if (value !== null) {
                console.log('PrivateKey-->', value)

            }
        } catch (error) {

        }
    }


    deposit = async () => {

        // try {
        //     if (!this.state.amount) {
        //         await this.setState({ isError: true, error: "uint256 must required!" })
        //         return
        //     }
        //     else {
        //         await this.setState({ isError: false })
        //     }

        //     console.log("[LOAD TOKEN]")
        //     const myContract = await w3s.createHydroTokenContract();

        //     //console.log(myContract.methods, "myContract");
        //     console.log(_spender, "_spender");
        //     console.log(this.state.amount, "amount");
        //     console.log(this.state.comments, "comments");


        //     // this.web3.eth.sendSignedTransaction(this.state.test, (err, tx) => {
        //     //     alert(err)
        //     // });



        //     let token = await myContract.methods.approveAndCall(_spender, toWei(this.state.amount.toString()), '0x42').send({ from: this.props.route.params.walletToken })

        // }
        // catch (ex) {
        //     console.log(ex)
        //     await this.setState({ isError: true })
        //     if (ex.message)
        //         await this.setState({ error: ex.message })
        // }
        try {
            if (!this.state.hydroaddress) {
                await this.setState({ isError: true, error: "Hydro Address Required" })
                return
            }
            else {
                await this.setState({ isError: false })

            }
            if (!this.state.amount) {
                await this.setState({ isError: true, error: "uint256 must required!" })
                return
            }
            else {
                await this.setState({ isError: false })

            }

            let provider = ethers.getDefaultProvider();
            let privatekey = this.state.privatekeyValue;
            // let privatekey = '0x3141592653589793238462643383279502884197169399375105820974944592';
            const wallet = new ethers.Wallet(privatekey, provider,)
            // //console.log("Wallet Address --------->", wallet.address)

            let signMessage = wallet.signMessage("Hello World!")

            signMessage.then((signature) => {

                // Flat-format
                console.log("signature------>", signature);

                console.log("splitSignature------>", ethers.utils.splitSignature(signature));
            });
            let tx = {
                to: this.state.hydroaddress,
                // to: '0x88a5c2d9919e46f883eb62f7b8dd9d0cc45bc290',
                value: ethers.utils.parseEther(this.state.amount),
                // value: ethers.utils.parseEther('0.1')
            }
            let signPromise = wallet.sign(tx)

            signPromise.then((signedTransaction) => {

                console.log("signed-->", signedTransaction);

                let sendPromise = wallet.sendTransaction(tx);

                sendPromise.then((tx) => {
                    // console.log("TX-------->", tx);
                    alert(tx);
                    // {
                    //    // All transaction fields will be present
                    //    "nonce", "gasLimit", "pasPrice", "to", "value", "data",
                    //    "from", "hash", "r", "s", "v"
                    // }
                })

                    .catch((error) => {
                        // console.log("Error---->", error)
                        alert(error);
                    });
            })
        } catch {


        }
    };

    // onOpenlink = () => {
    //     // If scanned then function to open URL in Browser
    //     Linking.openURL(this.state.qrvalue);
    // };
    // onBarcodeScan = (qrvalue) => {
    //     // Called after te successful scanning of QRCode/Barcode
    //     this.setState({ Qrvalue: qrvalue });
    //     this.setState({ setOpenScanner: false });
    // };

    // onOpenScanner = async () => {
    //     // To Start Scanning
    //     try {
    //         const granted = await PermissionsAndroid.request(
    //             PermissionsAndroid.PERMISSIONS.CAMERA,
    //             {
    //                 title: 'Camera Permission',
    //                 message: 'App needs permission for camera access',
    //             },
    //         );
    //         if (granted === PermissionsAndroid.RESULTS.GRANTED) {
    //             // If CAMERA Permission is granted
    //             this.props.navigation.navigate("scanqr");
    //         } else {
    //             alert('CAMERA permission denied');
    //         }
    //     } catch (err) {
    //         alert('Camera permission err', err);
    //         console.log(err);

    //     }


    // };
    onCopyToClipboard = async () => {
        await Clipboard.setString(this.props.route.params.walletToken);
        ToastAndroid.show("Copied To Clipboard!", ToastAndroid.SHORT);
    };
    onChange = (value) => {
        // alert(value)
        this.setState({ amount: value })
        console.log("state value --->", this.state.amount);
    }

    render() {
        console.log(this.props.route.params.walletToken, "Props")
        return (

            <BgView>
                <Header.Back title="Deposits" onBackPress={this.props.navigation.goBack} containerStyle={styles.header} />
                <View style={styles.container}>
                    <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
                        <View style={{ paddingVertical: width * 0.02 }} />

                        <DepositCard
                            hydroAddress={this.props.route.params.walletToken}
                            onIdPress={this.onCopyToClipboard}
                        />

                        <View style={styles.qrcode}>
                            <QRCode
                                value={JSON.stringify(this.props.route.params.walletToken)}
                                size={width * 0.5}
                                color="white"
                                backgroundColor="black"
                                logoSize={30}
                                logoMargin={2}
                                logoBorderRadius={15}
                                logoBackgroundColor="yellow"
                            />
                        </View>
                        <LabelInput
                            label="Hydro Address"
                            placeholder="Enter Hydro Address"
                            // keyboardType={'number-pad'}
                            value={this.state.hydroaddress}
                            onChangeText={(value) => {
                                console.log(value)
                                this.setState({ hydroaddress: value })
                            }}
                        />
                        <LabelInput
                            label="Amount"
                            placeholder="0.00"
                            keyboardType={'number-pad'}
                            value={this.state.amount}
                            onChangeText={(value) => this.onChange(value)}
                        // onChangeText={(value) => {
                        //     console.log(value)
                        //     this.setState({ value })
                        // }}
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

                        <View style={{ flexDirection: 'row', flex: 1, }}>
                            <View style={styles.button}>
                                <Button text="Deposit" onPress={this.deposit} />
                            </View>
                            {/* <View style={styles.button}>
                                <Button text="Read QR" onPress={this.onOpenScanner} />
                            </View> */}
                        </View>

                    </KeyboardAwareScrollView>
                </View>
            </BgView>

        );

    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        paddingHorizontal: width * 0.05
    },

    header: {
        marginTop: Platform.OS == 'ios' ? 0 : StatusBar.currentHeight,
        paddingTop: 0,
        height: 50
    },

    button: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: width * 0.03,

    },
    qrcode: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: width * 0.05,
        marginBottom: width * 0.05,
        marginRight: width * 0.02,
    },

})

export default Deposits;
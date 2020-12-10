import React, { Component } from 'react';
import {
    View,
    ScrollView,
    KeyboardAvoidingView,
    Text,
    Dimensions,
    Platform, StatusBar, StyleSheet, PermissionsAndroid, SafeAreaView
} from "react-native";
import { LabelInput } from "../../../components/Forms";
import { BgView, Header } from "../../../components/Layouts";
import Button from "../../../components/TwoButton/index";
import w3s from '../../../libs/Web3Service';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
const { height, width } = Dimensions.get('window');
import { CameraKitCameraScreen } from 'react-native-camera-kit';
import QRCodeScanner from 'react-native-qrcode-scanner';
class Transfer extends Component {
    state = {
        addressTo: "",
        amount: "",
        isError: false,
        isSuccess: false,
        error: "",
        qrvalue: "",
        qrSection: false,
    }

    async componentDidMount() {
        await w3s.initContract()
    }

    transfer = async () => {
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


            const myContract = await w3s.createHydroTokenContract();
            console.log(myContract, "myContract");
            let token = await myContract.methods.transfer(this.state.addressTo, this.state.amount).call()
            console.log(token, "token")
            this.setState({ isSuccess: true, addressTo: "", amount: "" })
        }
        catch (ex) {
            console.log(ex)
            await this.setState({ isError: true })
            if (ex.message)
                await this.setState({ error: ex.message })
        }

    }
    onOpenlink = () => {
        // If scanned then function to open URL in Browser
        Linking.openURL(this.state.qrvalue);
    };
    onBarcodeScan = (qrvalue) => {
        // Called after te successful scanning of QRCode/Barcode
        this.setState({ Qrvalue: qrvalue });
        this.setState({ setOpenScanner: false });
    };

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
    //     };
    // }
    onSuccess = e => {
        // Linking.openURL(e.data).catch(err =>
        //   console.error('An error occured', err)
        // );
     //   alert(e.data)
        if ( e.data !== "" ){
            this.setState({ qrSection: false })
            this.setState({ qrvalue: e.data })
        }
    };
    openqr = () => {
        this.setState({ qrSection: true }) 
    };
    render() {

        return (
            <BgView>
                <Header.Back title="Transfer" onBackPress={this.props.navigation.goBack} containerStyle={styles.header} />

                <View style={styles.container}>
                    <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
                        <View style={{ paddingVertical: width * 0.02, width: width }} />
                        <LabelInput
                            label="Hydro Address"
                            placeholder="Enter Hydro Address"
                            value={this.state.qrvalue}
                            onChangeText={(value) => this.setState({ addressTo: value })}
                        />
                    </KeyboardAwareScrollView>
                </View>

                {this.state.qrSection == true ?
                    <View style={{ alignItems: 'center', flex: 1, marginTop: width * 0.33 }}>
                        <QRCodeScanner
                            onRead={this.onSuccess}
                            reactivate={true}
                            showMarker={true}
                            markerStyle={{ borderColor: 'black', borderRadius: 10 }}
                            // checkAndroidPermissions={false}
                            cameraStyle={{ height: height * 0.25, width: width * 0.88 }}
                            containerStyle={{ height: height * 0.25, width: width * 0.88 }}
                        />

                    </View> : null}




                <View style={styles.container}>
                    <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
                        <LabelInput
                            label="amount"
                            placeholder="0.00"
                            keyboardType={'number-pad'}
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
                                Transfer Successfully !
                            </Text>
                        }

                        {/* <View style={styles.button}>
                            <Button text="Transfer" onPress={this.transfer} />
                        </View>  */}
                        <View style={{ flexDirection: 'row', flex: 1, }}>
                            <View style={styles.button}>
                                <Button text="Transfer" onPress={this.transfer} />
                            </View>
                            <View style={styles.button}>
                                <Button text="Read QR" onPress={this.openqr} />
                            </View>
                        </View>
                    </KeyboardAwareScrollView>

                </View>

            </BgView>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        //flex: 1,
        alignItems: "center",
        paddingHorizontal: width * 0.05,

    },

    header: {
        marginTop: Platform.OS == 'ios' ? 0 : StatusBar.currentHeight,
        paddingTop: 0,
        height: 50
    },

    button: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: width * 0.05
    }

});
export default Transfer;
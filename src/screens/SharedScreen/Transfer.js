import React, { useState, useContext } from "react";
import {
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import { LabelInput } from "../../components/Forms";
import { BgView, Header } from "../../components/Layouts";
import { Paragraph, Lead } from "../../components/Typography";
import { ThemeContext } from "../../hooks/useTheme";
import Icon from "react-native-vector-icons/FontAwesome5";
import { HalfWay } from "../../components/Modals";
import Button from "../../components/Button";

const Transfer = ({ navigation }) => {
  const [transferDetails, setTransferDetails] = useState({
    wallet: "",
    recepientAddress: "",
    amount: "",
    message: "",
    gasFee: "",
  });
  const { wallet, recepientAddress, amount, message, gasFee } = transferDetails;
  const { isLightTheme, lightTheme, darkTheme } = useContext(ThemeContext);
  const theme = isLightTheme ? lightTheme : darkTheme;
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <BgView>
      <HalfWay
        visible={modalVisible}
        onClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View>
          <View>
            <Lead style={{ marginBottom: 10 }}>Transfer Token</Lead>
            {[
              ["To:", "4b9b621d8e22E"],
              ["Amount:", "40,000HYDRO"],
              ["Message:", "Payment for Bug fixes"],
            ].map(([key, value]) => (
              <View
                style={{
                  paddingVertical: 15,
                  borderBottomWidth: 0.5,
                  borderColor: theme.primary,
                  display: "flex",
                  alignItems: "flex-start",
                  flexDirection: key === "Message:" ? "column" : "row",
                }}
              >
                <Paragraph style={{ flexShrink: 0 }}>{key}</Paragraph>
                <Paragraph
                  style={{
                    flexGrow: 1,
                    flexShrink: 1,

                    width: "100%",
                    fontSize: ["Amount:", "Message:"].includes(key) ? 20 : 16,
                    textAlign: key === "Message:" ? "left" : "right",
                  }}
                >
                  {value}
                </Paragraph>
              </View>
            ))}
          </View>
          <View
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button
              text="Proceed"
              onPress={() => setModalVisible(false)}
              style={{ marginVertical: "10%" }}
            />
            <Button.Cancel
              text="Cancel"
              onPress={() => setModalVisible(false)}
            />
          </View>
        </View>
      </HalfWay>
      <Header.Back title="Transfer" onBackPress={navigation.goBack} />
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          marginVertical: "10%",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <TouchableOpacity>
            <Image source={require("../../assets/images/bitcoin.png")} />
          </TouchableOpacity>
          <TouchableOpacity style={{ marginHorizontal: "3%" }}>
            <Image source={require("../../assets/images/ethereum.png")} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require("../../assets/images/hydro.png")} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 30,
              height: 30,
              borderRadius: 20,
              marginHorizontal: "3%",
              borderColor: theme.basic,
              borderWidth: 2,
              backgroundColor: theme.background,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Icon name="plus" color={theme.basic} size={12} />
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity>
            <Icon name="qrcode" color={theme.basic} size={22} />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView>
        <KeyboardAvoidingView>
          <LabelInput
            label="Wallet"
            value={wallet}
            onChangeText={(value) => {
              setTransferDetails(value);
            }}
          />
          <LabelInput
            label="To"
            placeholder="Input Address"
            value={recepientAddress}
            onChangeText={(value) => {
              setTransferDetails(value);
            }}
          />
          <LabelInput
            label="Amount"
            value={amount}
            keyboardType="phone-pad"
            onChangeText={(value) => {
              setTransferDetails(value);
            }}
          />
          <LabelInput
            label="Message"
            value={message}
            onChangeText={(value) => {
              setTransferDetails(value);
            }}
          />
          <LabelInput
            label="Gas Fee"
            value={gasFee}
            placeholder="0.004Ether"
            onChangeText={(value) => {
              setTransferDetails(value);
            }}
          />
        </KeyboardAvoidingView>
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "10%",
          }}
        >
          <Button text="Send" onPress={() => setModalVisible(true)} />
        </View>
      </ScrollView>
    </BgView>
  );
};

export default Transfer;

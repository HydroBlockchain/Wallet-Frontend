import React from "react";
import "./shim";
import { Drizzle, generateStore } from "@drizzle/store";
import ProtectedWallet from "./build/contracts/ProtectedWallet.json";
import ProtectedWalletFactory from "./build/contracts/ProtectedWalletFactory.json";
import { AppRegistry } from "react-native";
import App from "./src/App";
import { name as appName } from "./app.json";

const options = {
  contracts: [ProtectedWallet, ProtectedWalletFactory],
  web3: {
    fallback: {
      type: "ws",
      url: "ws://127.0.0.1:8545",
    },
  },
};
const drizzleStore = generateStore(options);
const drizzle = new Drizzle(options, drizzleStore);

AppRegistry.registerComponent(appName, () => () => <App drizzle={drizzle} />);

import React, { useReducer, useEffect } from "react";
import SnowflakeContext from "./snowflakeContext";
import snowflakeReducer from "./snowflakeReducer";
import IdentityRegistry from "../../contracts/IdentityRegistry.json";
import Web3 from "web3";
import AsyncStorage from '@react-native-community/async-storage'
import Snowflake from "../../contracts/Snowflake.json";
import w3s from "../../libs/Web3Service";
import {
  CLEAR_ERRORS,
  GET_HYDRO_ADDRESS,
  IDENTITY_ERROR,
  CREATE_DEFAULT_WALLET,
  GET_IDENTITY_ADDRESS,
  ADDRESS_ERROR,
  CREATE_DEFAULT_WALLET_ERROR,
  CREATE_SIGNATURE,
  IS_HYDRO_ID_AVAILABLE,
} from "../types";

const SnowflakeState = ({ children }) => {
  const initialState = {
    ein: null,
    hydroIDAvailable: false,
    hydroAddress: null,
    defaultWalletData:AsyncStorage.getItem('address'),
    walletError:null,
    signature: null,
    loading: false,
    error: null,
  };

  const [state, dispatch] = useReducer(snowflakeReducer, initialState);



  useEffect(() => {
    w3s.initContract();

    
  }, []);
  const generateRandomRef = () => {
    var result = "";
    var characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ.+++!!0123456789";

    for (var i = 0; i < 32; i++) {
      result += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    return result;
  };

  
  
  


  //check if hydro ID is available
  const isHydroIdAvailable = async (hydroId) => {
    try {
      const myContract = await w3s.createClientRaindropAddress();

      const response = await myContract.methods
        .hydroIDAvailable(hydroId)
        .call();

      console.log(response);

      dispatch({ type: IS_HYDRO_ID_AVAILABLE, payload: response });
    } catch (err) {
      console.log(`this is ex full error object ${err}`);

      dispatch({ type: ADDRESS_ERROR, payload: err.message });
    }
  };

  // create default address
  const createDefaultAddress = async () => {
    let entropy = generateRandomRef()
    try {
      const myAccount = await w3s.web3.eth.accounts.wallet.create(1, entropy);
      let account = myAccount[0].address
      dispatch({ type: CREATE_DEFAULT_WALLET, payload: account });
    } catch (err) {
      console.log(err.message)
      dispatch({ type: CREATE_DEFAULT_WALLET_ERROR, payload: err.message });
    }
  };


  // create signature
  const createSignature = async (address, timestamp) => {
    try {
      const signature = await w3s.web3.utils.soliditySha3(
        "0x19",
        "0x00",
        IdentityRegistry.address,
        "I authorize the creation of an Identity on my behalf.",
        address,
        address,
        {
          t: "address[]",
          v: [Snowflake.address],
        },
        {
          t: "address[]",
          v: [],
        },
        timestamp
      );
      console.log(`signature : ${signature}`);
      dispatch({ type: CREATE_SIGNATURE, payload: signature });
    } catch (err) {
      console.log(err.message);
      dispatch({ type: ADDRESS_ERROR, payload: err.message });
    }
  };

  // create ethereum identity
  const createIdentity = async (signature, hydroId, timestamp) => {
    try {
      const myContract = await w3s.createSnowflakeContract();

      const response = await myContract.methods
        .createIdentityDelegated(
          signature.address,
          signature.address,
          [],
          hydroId,
          signature.v,
          signature.r,
          signature.s,
          timestamp
        )
        .send({
          from: signature.address,
        });
      console.log(`ein : ${response}`);
      dispatch({ type: GET_IDENTITY_ADDRESS, payload: response });
    } catch (err) {
      console.log(`ein error: ${err}`);
      dispatch({ type: IDENTITY_ERROR, payload: err.message });
    }
  };

  return (
    <SnowflakeContext.Provider
      value={{
        ein: state.ein,
        hydroAddress: state.hydroAddress,
        loading: state.loading,
        defaultWalletData: state.defaultWalletData,
        walletError: state.walletError,
        signature: state.signature,
        hydroIDAvailable: state.hydroIDAvailable,
        error: state.error,
        isHydroIdAvailable,
        createSignature,
        createDefaultAddress,
        createIdentity,
      }}
    >
      {children}
    </SnowflakeContext.Provider>
  );
};
export default SnowflakeState;

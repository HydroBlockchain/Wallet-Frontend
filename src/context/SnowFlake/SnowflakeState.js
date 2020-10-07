import React, { useReducer, useEffect } from "react";
import SnowflakeContext from "./snowflakeContext";
import snowflakeReducer from "./snowflakeReducer";
import IdentityRegistry from "../../contracts/IdentityRegistry.json";
import Snowflake from "../../contracts/Snowflake.json";
import w3s from "../../libs/Web3Service";
import {
  CLEAR_ERRORS,
  GET_HYDRO_ADDRESS,
  IDENTITY_ERROR,
  CREATE_DEFAULT_ADDRESS,
  GET_IDENTITY_ADDRESS,
  ADDRESS_ERROR,
  CREATE_SIGNATURE,
  IS_HYDRO_ID_AVAILABLE,
} from "../types";

const SnowflakeState = ({ children }) => {
  const initialState = {
    ein: null,
    hydroIDAvailable: false,
    hydroAddress: null,
    defaultAddress: null,
    signature: null,
    loading: false,
    error: null,
  };

  const [state, dispatch] = useReducer(snowflakeReducer, initialState);

  useEffect(() => {
    w3s.initContract();
  }, []);

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

  const createDefaultAddress = async () => {
    try {
      const myAccount = await w3s.web3.eth.accounts();

      dispatch({ type: CREATE_DEFAULT_ADDRESS, payload: myAccount.address });
    } catch (err) {
      dispatch({ type: ADDRESS_ERROR, payload: err.message });
    }
  };

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
          from: signature.from,
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
        defaultAddress: state.defaultAddress,
        signature: state.signature,
        hydroIDAvailable: state.hydroIDAvailable,
        error: state.error,
        isHydroIdAvailable,
        createSignature,
        createIdentity,
      }}
    >
      {children}
    </SnowflakeContext.Provider>
  );
};
export default SnowflakeState;

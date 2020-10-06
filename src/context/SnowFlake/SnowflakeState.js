import React, { useReducer, useEffect } from "react";
import SnowflakeContext from "./snowflakeContext";
import snowflakeReducer from "./snowflakeReducer";
import IdentityRegistry from "../../contracts/IdentityRegistry.json";
import Snowflake from "../../contracts/Snowflake.json";
import w3s from "../../libs/Web3Service";
import {
  CLEAR_ERRORS,
  GET_HYDRO_ADDRESS,
  GET_IDENTITY_ADDRESS,
  ADDRESS_ERROR,
  IS_HYDRO_ID_AVAILABLE,
} from "../types";

const SnowflakeState = ({ children }) => {
  const initialState = {
    identityAddress: null,
    hydroIDAvailable: false,
    hydroAddress: null,
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

  const createSignature = async (address, timestamp) => {
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
    return signature;
  };

  return (
    <SnowflakeContext.Provider
      value={{
        identityAddress: state.identityAddress,
        hydroAddress: state.hydroAddress,
        loading: state.loading,
        error: state.error,
        isHydroIdAvailable,
        createSignature
      }}
    >
      {children}
    </SnowflakeContext.Provider>
  );
};
export default SnowflakeState;

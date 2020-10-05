import React, { useReducer, useContext, Children } from "react";
import SnowflakeContext from "./snowflakeContext";
import snowflakeReducer from "./snowflakeContext";
import w3s from "../../libs/Web3Service";
import {
  CLEAR_ERRORS,
  GET_HYDRO_ADDRESS,
  GET_IDENTITY_ADDRESS,
  ADDRESS_ERROR,
} from "../types";

const SnowflakeState = ({ children }) => {
  const initialState = {
    identityAddress: null,
    hydroAddress: null,
    loading: false,
    error: null,
  };

  const [state, dispatch] = useReducer(snowflakeReducer, initialState);

  return (
    <SnowflakeContext.Provider
      value={{
        identityAddress: state.identityAddress,
        hydroAddress: state.hydroAddress,
        loading: state.loading,
        error: state.error,
      }}
    >
      {children}
    </SnowflakeContext.Provider>
  );
};
export default SnowflakeState;

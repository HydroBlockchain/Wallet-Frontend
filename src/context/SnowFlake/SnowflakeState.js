import React, { useReducer, useEffect,  } from "react";
import SnowflakeContext from "./snowflakeContext";
import snowflakeReducer from "./snowflakeReducer";
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

  useEffect(() => {
    w3s.initContract();
  }, []);
  
  const getIdentityAddress = async () => {
    try {
        
        const myContract = await w3s.createContract();
        
        const address = await myContract.methods.identityRegistryAddress().call()

        console.log(`identity address: ${address}`)
        
       dispatch({type: GET_IDENTITY_ADDRESS, payload: address})
        
    }
    catch (err) {
        console.log(`this is ex full error object ${err.message}`)
  
        dispatch({type: ADDRESS_ERROR, payload: err.message})
            
    }

}
//hydro token address
const getHydroAddress = async () => {
  try {
      
      const myContract = await w3s.createContract();
      
      const address = await myContract.methods.hydroTokenAddress().call()

      console.log(`hydro addrss: ${address}`)
      
     dispatch({type: GET_HYDRO_ADDRESS, payload: address})
      
  }
  catch (err) {
      console.log(`this is ex full error object ${err.message}`)

      dispatch({type: ADDRESS_ERROR, payload: err.message})
          
  }

}

  return (
    <SnowflakeContext.Provider
      value={{
        identityAddress: state.identityAddress,
        hydroAddress: state.hydroAddress,
        loading: state.loading,
        error: state.error,
        getIdentityAddress,
        getHydroAddress
      }}
    >
      {children}
    </SnowflakeContext.Provider>
  );
};
export default SnowflakeState;

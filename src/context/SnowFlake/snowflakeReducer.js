import {
  GET_HYDRO_ADDRESS,
  GET_IDENTITY_ADDRESS,
  IS_HYDRO_ID_AVAILABLE,
  CLEAR_ERRORS,
  CREATE_SIGNATURE,
  ADDRESS_ERROR,
  IDENTITY_ERROR,
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case GET_HYDRO_ADDRESS:
      return {
        ...state,
        hydroAddress: action.payload,
        loading: false,
      };
    case CREATE_SIGNATURE:
      return {
        ...state,
        signature: action.payload,
      };
    case CREATE_DEFAULT_ADDRESS:
      return {
        ...state,
        defaultAddress: action.payload,
        loading: false,
      };
    case GET_IDENTITY_ADDRESS:
      return {
        ...state,
        ein: action.payload,
        loading: false,
      };
    case IS_HYDRO_ID_AVAILABLE:
      return {
        ...state,
        hydroIDAvaialble: action.payload,
      };
    case ADDRESS_ERROR:
      return {
        ...state,
        hydroAddress: null,
        hydroIDAvailable: false,
        signature: null,
        defaultAddress: null,
        loading: false,
        error: action.payload,
      };
    case IDENTITY_ERROR:
      return {
        ...state,
        ein: null,
        loading: false,
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

import {
  GET_HYDRO_ADDRESS,
  GET_IDENTITY_ADDRESS,
  CLEAR_ERRORS,
  ADDRESS_ERROR,
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case GET_HYDRO_ADDRESS:
      return {
        ...state,
        hydroAddress: action.payload,
        loading: false,
      };
    case GET_IDENTITY_ADDRESS:
      return {
        ...state,
        identityAddress: action.payload,
        loading: false,
      };
    case GET_ADDRESS_FAIL:
    case ADDRESS_ERROR:
      return {
        ...state,
        address: null,
        loading: false,
        error: action.payload
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

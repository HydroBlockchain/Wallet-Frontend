import {GET_HYDRO_ADDRESS, GET_IDENTITY_ADDRESS, CLEAR_ERRORS, ADDRESS_ERROR} from '../types'

export default (state, action) => {
    switch(action.type) {
        case GET_HYDRO_ADDRESS:
        case GET_IDENTITY_ADDRESS: 
        return {
            ...state,
            address:action.payload,
            loading:false
        }
        case GET_ADDRESS_FAIL:
            return {
                ...state,
                address:null,
                loading: false
            }
        case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
    }
}
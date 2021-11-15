import {types} from '../constants/action-types';
const initialState = {
  invoiceContent: {},
  error: null,
  loading: true,
};

const textRecognition = (state = initialState, action) => {
  switch (action.type) {
    case types.TEXT_CONTENT:
      return {
        ...state,
        loading: false,
        invoiceContent: action.payload,
      };

    case types.CONTENT_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        invoiceContent: {},
      };

    default:
      return state;
  }
  console.log(state, '====Content=====');
};

export default textRecognition;

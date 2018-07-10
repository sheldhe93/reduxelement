import * as types from '../actions/ActionTypes';

const initialState = {
  agree1: ''
};

export default function agree(state = initialState, action) {
  switch (action.type) {
    case types.AGREE1Y:
      return {
        agree1: "Y",
      };
    case types.AGREE1N:
      return {
        agree1: "N"
      };
    default:
      return state;
  }
}
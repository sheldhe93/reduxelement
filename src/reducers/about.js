import * as types from '../actions/ActionTypes';

const initialState = {
  part1: { name: "교통여건", on: "off", success: "", star: 0, memo: "" },
  part2: { name: "주변환경", on: "off", success: "", star: 0, memo: "" },
  part3: { name: "동/층 정보", on: "off", success: "", dong: "", floor: " " },
  part4: { residence: ["", "전세 또는 월세"], time: ["", "현재 거주중"], age: ["", "50대", 50], sex: ["", "여자", "w"], dState: ["", "미혼"], success: "" },
  agree: "N",

};

export default function about(state = initialState, action) {
  /* ... */
  switch (action.type) {
    case types.AG2_1OPEN:
      return {
        ...state,
        part1: { ...state.part1, on: "on" }
      };
    case types.AG2_1CLOSE:
      return {
        ...state,
        part1: { ...state.part1, on: "off" }
      };
    case types.AG2_1MEMOCHANGE:
      return {
        ...state,
        part1: { ...state.part1, memo: action.memo }
      };
    case types.AG2_1STARCHANGE:
      return {
        ...state,
        part1: { ...state.part1, star: action.star }
      };
    case types.AG2_1SUCCESS:
      return {
        ...state,
        part1: { ...state.part1, success: "Y" }
      };
    case types.AG2_1NONSUCCESS:
      return {
        ...state,
        part1: { ...state.part1, success: "" }
      };
    case types.AG2_2OPEN:
      return {
        ...state,
        part2: { ...state.part2, on: "on" }
      };
    case types.AG2_2CLOSE:
      return {
        ...state,
        part2: { ...state.part2, on: "off" }
      };
    case types.AG2_2MEMOCHANGE:
      return {
        ...state,
        part2: { ...state.part2, memo: action.memo }
      };
    case types.AG2_2STARCHANGE:
      return {
        ...state,
        part2: { ...state.part2, star: action.star }
      };
    case types.AG2_2SUCCESS:
      return {
        ...state,
        part2: { ...state.part2, success: "Y" }
      };
    case types.AG2_2NONSUCCESS:
      return {
        ...state,
        part2: { ...state.part2, success: "" }
      };
    case types.AG2_3OPEN:
      return {
        ...state,
        part3: { ...state.part3, on: "on" }
      };
    case types.AG2_3CLOSE:
      return {
        ...state,
        part3: { ...state.part3, on: "off" }
      };

    case types.AG2_3DONG:
      return {
        ...state,
        part3: { ...state.part3, dong: action.dong }
      };
    case types.AG2_3FLOOR:
      return {
        ...state,
        part3: { ...state.part3, floor: action.floor }
      };

    case types.AG2_3SUCCESS:
      return {
        ...state,
        part3: { ...state.part3, success: "Y" }
      };
    case types.AG2_3NONSUCCESS:
      return {
        ...state,
        part3: { ...state.part3, success: "N" }
      };
    case types.AGREE2Y:
      return {
        ...state,
        agree: "Y",
      };
    case types.AGREE2N:
      return {
        ...state,
        agree: "N"
      };
    case types.AG3_RESID:
      return {
        ...state,
        part4: { ...state.part4, residence: action.residence }
      };
    case types.AG3_TIME:
      return {
        ...state,
        part4: { ...state.part4, time: action.time }
      };
    case types.AG3_AGE:
      return {
        ...state,
        part4: { ...state.part4, age: action.age }
      };
    case types.AG3_SEX:
      return {
        ...state,
        part4: { ...state.part4, sex: action.sex }
      };
    case types.AG3_STATE:
      return {
        ...state,
        part4: { ...state.part4, dState: action.dState }
      };
    case types.AG3_SUCCESS:
      return {
        ...state,
        part4: { ...state.part4, success: action.success }
      };
    case types.AG3_NONSUCCESS:
      return {
        ...state,
        part4: { ...state.part4, success: "" }
      };
    default:
      return state;
  }
}
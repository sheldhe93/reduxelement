import * as types from './ActionTypes';


//1페이지 동의
export function agree1y() {
  return {
    type: types.AGREE1Y
  };
}
//1페이지 동의안함
export function agree1n() {
  return {
    type: types.AGREE1N
  };
}

//2페이지 교통여건 열기 닫기
export function ag2_1open() {
  return {
    type: types.AG2_1OPEN,
  };
}
export function ag2_1close() {
  return {
    type: types.AG2_1CLOSE,
  };
}
export function ag2_1memochange(memo) {
  return {
    type: types.AG2_1MEMOCHANGE,
    memo
  };
}
export function ag2_1starchange(star) {
  return {
    type: types.AG2_1STARCHANGE,
    star
  };
}
export function ag2_1success() {
  return {
    type: types.AG2_1SUCCESS,
  };
}
export function ag2_1nonsuccess() {
  return {
    type: types.AG2_1NONSUCCESS,
  };
}
//2페이지 주변환경 열기 닫기
export function ag2_2open() {
  return {
    type: types.AG2_2OPEN,
  };
}
export function ag2_2close() {
  return {
    type: types.AG2_2CLOSE,
  };
}
//2페이지 동의
export function agree2y() {
  return {
    type: types.AGREE2Y
  };
}
//2페이지 동의안함
export function agree2n() {
  return {
    type: types.AGREE2N
  };
}

export function ag2_2memochange(memo) {
  return {
    type: types.AG2_2MEMOCHANGE,
    memo
  };
}
export function ag2_2starchange(star) {
  return {
    type: types.AG2_2STARCHANGE,
    star
  };
}
export function ag2_2success() {
  return {
    type: types.AG2_2SUCCESS,
  };
}
export function ag2_2nonsuccess() {
  return {
    type: types.AG2_2NONSUCCESS,
  };
}

//2페이지 동층정보열기 닫기
export function ag2_3open() {
  return {
    type: types.AG2_3OPEN,
  };
}
export function ag2_3close() {
  return {
    type: types.AG2_3CLOSE,
  };
}
export function ag2_3dong(dong) {
  return {
    type: types.AG2_3DONG,
    dong
  };
}
export function ag2_3floor(floor) {
  return {
    type: types.AG2_3FLOOR,
    floor
  };
}
export function ag2_3success() {
  return {
    type: types.AG2_3SUCCESS,
  };
}
export function ag2_3nonsuccess() {
  return {
    type: types.AG2_3NONSUCCESS,
  };
}

//3 페이지 상세 정보
export function ag3_resid(residence) {
  return {
    type: types.AG3_RESID,
    residence
  };
}
export function ag3_time(time) {
  return {
    type: types.AG3_TIME,
    time
  };
}
export function ag3_age(age) {
  return {
    type: types.AG3_AGE,
    age
  };
}
export function ag3_sex(sex) {
  return {
    type: types.AG3_SEX,
    sex
  };
}
export function ag3_state(dState) {
  return {
    type: types.AG3_STATE,
    dState
  };
}
export function ag3_success(success) {
  return {
    type: types.AG3_SUCCESS,
    success
  };
}
export function ag3_nonsuccess() {
  return {
    type: types.AG3_NONSUCCESS,
  };
}
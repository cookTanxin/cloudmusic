import * as actionTypes from "./constants";

// 初始化数据
const defaultStore = {
  banners: [],
};

function reducer(state = defaultStore, action) {
  switch (action.type) {
    case actionTypes.CHANGE_TOP_BANNER:
      return { ...state, banners: action.banners };
    default:
      return state;
  }
}

export default reducer;

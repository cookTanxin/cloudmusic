import * as actionTypes from "./constants";

// 初始化数据
const defaultStore = {
  // 录播图数据
  banners: [],
  // 热门推荐数据
  hotRecommend: [],
};

function reducer(state = defaultStore, action) {
  switch (action.type) {
    case actionTypes.CHANGE_TOP_BANNER:
      return { ...state, banners: action.banners };
    case actionTypes.CHANGE_HOT_RECOMMEND:
      return { ...state, hotRecommend: action.hotRecommend };
    default:
      return state;
  }
}

export default reducer;

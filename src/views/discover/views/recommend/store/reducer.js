import * as actionTypes from "./constants";

// 初始化数据
const defaultStore = {
  // 录播图数据
  banners: [],
  // 热门推荐数据
  hotRecommend: [],
  // 新专辑
  newAlbum: [],
  // 热门歌手
  hotSinger: [],
};

function reducer(state = defaultStore, action) {
  switch (action.type) {
    case actionTypes.CHANGE_TOP_BANNER:
      return { ...state, banners: action.banners };
    case actionTypes.CHANGE_HOT_RECOMMEND:
      return { ...state, hotRecommend: action.hotRecommend };
    case actionTypes.CHANGE_NEW_ALBUM:
      return { ...state, newAlbum: action.newAlbum };
    case actionTypes.CHANGE_HOT_SINGER:
      return { ...state, hotSinger: action.hotSinger };
    default:
      return state;
  }
}

export default reducer;

// 方法常量
import * as actionTypes from "./constants";

// api
import {
  getBannerData,
  getHotRecommendData,
  getNewAlbumData,
} from "@/services/recommend";

// 管理banner数据
export const changeBannerAction = (res) => ({
  type: actionTypes.CHANGE_TOP_BANNER,
  banners: res.banners,
});

// 管理hot-recommend
export const changeHotrecommendAction = (res) => ({
  type: actionTypes.CHANGE_HOT_RECOMMEND,
  hotRecommend: res.result.slice(0, 8),
});

// 管理 newalbum
export const changeAlbumAction = (res) => ({
  type: actionTypes.CHANGE_NEW_ALBUM,
  newAlbum: res.playlists,
});

// 异步操作 banner 因为action 都是同步的 只返回一个对象 但是在实际开发中 很多场景都是异步的
// 无法通过 普通的action creator 来实现 所有要使用 redux thunk 这个中间件
export const getBanner = () => {
  return async (dispatch) => {
    const data = await getBannerData();
    // 异步提交action
    dispatch(changeBannerAction(data));
  };
};

// 获取热门推荐
export const getHotRecommend = () => {
  return async (dispatch) => {
    const data = await getHotRecommendData();
    // 异步提交action
    dispatch(changeHotrecommendAction(data));
  };
};

// 获取新专辑
export const getNewalbum = () => {
  return async (dispatch) => {
    const data = await getNewAlbumData();
    // 异步提交action
    dispatch(changeAlbumAction(data));
  };
};

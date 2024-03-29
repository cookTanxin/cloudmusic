import request from "@/utils/request";

// 获取banner 数据
export function getBannerData() {
  return request({
    url: "/banner",
  });
}

// 获取热门推荐数据
export function getHotRecommendData() {
  return request({
    url: "/personalized",
  });
}

// 获取新歌数据
export function getNewAlbumData() {
  return request({
    url: "/top/playlist/highquality",
  });
}

// 获取歌手数据
export function getSingerlist() {
  return request({
    url: "/artist/list?cat=1001",
  });
}
// 获取热门歌手
export function getHotSingerlistData() {
  return request({
    url: "/personalized/newsong",
  });
}
// 获取榜单数据
export function getTopList(id) {
  return request({
    url: "/playlist/detail",
    params: {
      id,
    },
  });
}

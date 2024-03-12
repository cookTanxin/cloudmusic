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

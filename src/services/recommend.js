import request from "@/utils/request";

// 获取banner 数据
export function getBannerData() {
  return request({
    url: "/banner",
  });
}

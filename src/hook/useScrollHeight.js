import { useEffect, useState } from "react";

/**
 * 动态获取浏览器滚动高度
 */
function useScrollHeight() {
  // hook
  const [scroll, setScroll] = useState(0);
  // 设置滚动高度
  const setScrollHeightFun = () => {
    setScroll(window.scrollY);
  };
  useEffect(() => {
    window.addEventListener("scroll", setScrollHeightFun);
    return () => {
      // 组件卸载移除事件监听
      window.removeEventListener("scroll", setScrollHeightFun);
    };
  }, []);
  return [scroll];
}

export default useScrollHeight;

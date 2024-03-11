// react
import React, { memo } from "react";
// style
import { Recommendwrap } from "./style";
// banner 组件
import Cbanner from "./components/c-banner";
// hotcommend 组件
import HotRecommend from "./components/c-hotrecommend";
const Recommend = memo(() => {
  return (
    <Recommendwrap>
      {/* banner 区域 */}
      <div className="banner-area">
        <Cbanner></Cbanner>
      </div>
      {/* 内容区域 */}
      <div className="recommend-content wrap-v2">
        <div className="innerrecommend">
          <div className="recommend-left">
            {/* 推荐区块 */}
            <HotRecommend></HotRecommend>
          </div>
          <div className="recommend-right">右侧</div>
        </div>
      </div>
    </Recommendwrap>
  );
});

export default Recommend;